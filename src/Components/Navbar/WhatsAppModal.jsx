import React from 'react'

const WhatsAppModal = ({openWhatsApp, closeModal}) => {
    return (
      <div className="fixed inset-y-0 right-0  flex items-center z-50">
        <div className="bg-cyan bg-gradient-to-r from-blue to-orange p-6 rounded-lg shadow-xl max-w-sm w-full mr-0 mt-30">
          <h2 className="text-2xl font-bold mb-4 text-white">Contact Me</h2>
          <p className="mb-2 text-white">Would you like to continue to WhatsApp to discuss to hire me?</p>
          
          <div className="flex justify-end gap-4">
            <button
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-800"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 flex items-center gap-2"
              onClick={openWhatsApp}
            >
              Open WhatsApp
            </button>
          </div>
        </div>
      </div>
    );
  };
export default WhatsAppModal
