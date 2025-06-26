'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('nama'),
      email: formData.get('email'),
      message: formData.get('pesan'),
    };

    setLoading(true);
    try {
      const res = await fetch('/api/kirim-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSent(true);
        form.reset();
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            We are ready to help you. Please contact us using the form below or visit our office directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Office Address</h3>
              <p className="text-gray-600 mt-2">Jl. Pertanian No.123, Sidoarjo, Indonesia 61234</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <p className="text-gray-600 mt-2">contact@frent.com</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Phone</h3>
              <p className="text-gray-600 mt-2">+62 812 3456 7890</p>
            </div>
            <div className="mt-8">
              <iframe
                title="Our Location"
                src="https://maps.google.com/maps?q=Sidoarjo&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-64 border rounded-lg"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            {sent && (
              <div className="text-green-600 font-medium text-sm mb-4">
                Message sent successfully!
              </div>
            )}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="nama"
                  id="nama"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom"
                  required
                />
              </div>
              <div>
                <label htmlFor="pesan" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="pesan"
                  id="pesan"
                  rows={5}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-custom hover:bg-opacity-90 transition-colors"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
