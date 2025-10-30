import WhatsappIcon from "@/components/icons/WhatsappIcon";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5533998169207"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Falar no WhatsApp"
    >
      <div className="relative">
        {/* Button with subtle pulse */}
        <div className="relative bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-subtle-pulse">
          <WhatsappIcon className="h-7 w-7" />
        </div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Fale conosco no WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
