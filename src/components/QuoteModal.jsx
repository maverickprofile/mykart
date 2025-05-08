import React, { useState } from 'react';
import Modal from 'react-modal';

// Make sure to bind Modal to your appElement once at the root of your app
Modal.setAppElement('#root'); // Or whatever your app root element ID is

const QuoteModal = ({ isOpen, onRequestClose, cartridge, model, brand, googleFormURL, nameEntry, emailEntry, phoneEntry, messageEntry, cartridgeEntryId, modelEntryId, brandEntryId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', null

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmissionStatus('loading');

    const formData = new FormData();
    formData.append(nameEntry, name);
    formData.append(emailEntry, email);
    formData.append(phoneEntry, phone);
    formData.append(messageEntry, message);
    formData.append(cartridgeEntryId, cartridge);
    formData.append(modelEntryId, model);
    formData.append(brandEntryId, brand);

    try {
      const response = await fetch(googleFormURL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Forms
        body: formData,
      });

      if (response.ok || response.status === 0) {
        setSubmissionStatus('success');
        setTimeout(() => {
          onRequestClose(); // Close the modal after a short delay
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
          setSubmissionStatus(null);
        }, 1500);
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
      console.error('Submission error:', error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Request a Quote"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
    >
      <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full m-4">
        <button
          onClick={onRequestClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Request a Quote</h2>
          <p className="text-gray-700 mb-2">You are requesting a quote for:</p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li><strong>Cartridge:</strong> {cartridge}</li>
            <li><strong>Printer Model:</strong> {model || 'N/A'}</li>
            <li><strong>Brand:</strong> {brand}</li>
          </ul>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onRequestClose}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
              >
                Close
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={submissionStatus === 'loading'}
              >
                {submissionStatus === 'loading' ? 'Submitting...' : 'Submit Quote Request'}
              </button>
            </div>
            {submissionStatus === 'success' && (
              <p className="text-green-500 font-semibold">Quote request submitted!</p>
            )}
            {submissionStatus === 'error' && (
              <p className="text-red-500 font-semibold">Error submitting request.</p>
            )}
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default QuoteModal;