import { useForm, ValidationError } from '@formspree/react';
import { PROFILE } from '../data/profile';
import PixelButton from '../pixel-system/components/PixelButton';

export default function Contact() {
  const [state, handleSubmit] = useForm('xzbnvjlr');

  if (state.succeeded) {
    return (
      <section className="page contact">
        <div className="pixel-panel contact-panel">
          <h1 className="panel-heading">&gt; TRANSMISSION RECEIVED</h1>
          <p className="bio-text">
            Thanks for reaching out! I&apos;ll get back to you as soon as I can.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="page contact">
      <div className="pixel-panel contact-panel">
        <h1 className="panel-heading">
          &gt; SEND_TRANSMISSION<span className="cursor">█</span>
        </h1>
        <p className="contact-meta">
          EMAIL: {PROFILE.email} · PHONE: {PROFILE.phone}
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="form-label" htmlFor="name">
            NAME
          </label>
          <input className="form-input" id="name" name="name" type="text" placeholder="JANE DOE" required />

          <label className="form-label" htmlFor="email">
            EMAIL
          </label>
          <input
            className="form-input"
            id="email"
            name="email"
            type="email"
            placeholder="YOU@EXAMPLE.COM"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label className="form-label" htmlFor="message">
            MESSAGE
          </label>
          <textarea
            className="form-input"
            id="message"
            name="message"
            rows={6}
            placeholder="TYPE YOUR MESSAGE..."
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <PixelButton type="submit" variant="cyan" disabled={state.submitting}>
            {state.submitting ? 'TRANSMITTING...' : 'TRANSMIT ▸'}
          </PixelButton>
        </form>
      </div>
    </section>
  );
}
