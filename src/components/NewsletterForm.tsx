"use client";

export default function NewsletterForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle newsletter subscription here
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    console.log('Newsletter subscription:', email);
    // You can add actual subscription logic here
  };

  return (
    <form className="footer-form" onSubmit={handleSubmit}>
      <input 
        type="email" 
        placeholder="Enter your e-mail..." 
        required 
        aria-label="Email address"
        name="email"
      />
      <button type="submit">Subscribe</button>
    </form>
  );
}
