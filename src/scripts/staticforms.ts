// Shared StaticForms submit handler. Progressive enhancement: intercepts any
// `form[data-sf-form]`, posts via fetch, and shows an inline status — no redirect.
// Success copy comes from the form's `data-sf-success`; the status element is the
// nearest `[data-sf-status]` within the form's parent.
function bind(f: HTMLFormElement) {
  if (f.dataset.sfBound) return;
  f.dataset.sfBound = '1';
  const status = f.parentElement?.querySelector('[data-sf-status]') as HTMLElement | null;

  f.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = f.querySelector('button[type=submit]') as HTMLButtonElement | null;
    const label = btn?.textContent ?? '';
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Submitting…';
    }
    if (status) {
      status.hidden = true;
      status.className = 'form-status';
    }

    try {
      const res = await fetch(f.action, {
        method: 'POST',
        body: new FormData(f),
        headers: { Accept: 'application/json' },
      });
      const data = await res.json().catch(() => ({}) as any);
      const ok =
        res.ok && (data.success === true || String(data.message ?? '').toLowerCase().includes('success'));
      if (!ok) throw new Error(data.message || 'Submission failed');
      if (status) {
        status.textContent = f.dataset.sfSuccess || 'Thanks, got it.';
        status.classList.add('is-ok');
      }
      const phEvent = f.dataset.posthogEvent;
      if (phEvent) {
        (window as any).posthog?.capture(phEvent);
      }
      f.reset();
    } catch {
      if (status) {
        status.textContent = 'Something went wrong. Please try again in a moment.';
        status.classList.add('is-err');
      }
    } finally {
      if (status) status.hidden = false;
      if (btn) {
        btn.disabled = false;
        btn.textContent = label;
      }
    }
  });
}

document.querySelectorAll<HTMLFormElement>('form[data-sf-form]').forEach(bind);
