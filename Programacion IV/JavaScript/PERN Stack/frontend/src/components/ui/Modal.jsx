export function Modal({ isOpen, onClose, onConfirm, title, message, confirmText = "Confirmar", cancelText = "Cancelar" }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay oscuro */}
            <div
                className="absolute inset-0 bg-black bg-opacity-70"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative bg-zinc-900 rounded-lg shadow-xl p-6 max-w-md w-full mx-4 border border-zinc-700">
                {/* Título */}
                <h3 className="text-xl font-bold text-white mb-4">
                    {title}
                </h3>

                {/* Mensaje */}
                <p className="text-gray-300 mb-6">
                    {message}
                </p>

                {/* Botones */}
                <div className="flex gap-3 justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-zinc-700 text-white rounded-md hover:bg-zinc-600 transition duration-200"
                    >
                        {cancelText}
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200"
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
