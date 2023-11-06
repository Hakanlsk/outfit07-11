import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Iletisim() {
    return ( 
      <div>
        <Navbar/>
        <div className="bg-gray-100 p-6 md:w-1/2 md:mx-auto lg:w-1/3 mt-9">
        <h2 className="text-2xl font-semibold mb-4">İletişim</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Adınız ve Soyadınız</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Adınızı girin"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">E-posta</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="E-posta adresinizi girin"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Mesajınız</label>
            <textarea
              className="w-full p-2 border rounded resize-none"
              rows="4"
              placeholder="Mesajınızı buraya girin"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Gönder
          </button>
        </form>
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Sosyal Bağlantılar</h3>
          <div className="flex space-x-4 justify-between">
            <div className="flex flex-row">
                <h3 className="font-medium mr-2">Hakan Işık</h3>
                <a target="_blank" href="https://www.linkedin.com/in/hakanlsk/">
                    <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-800 mr-2" />
                </a>
                <a target="_blank" href="https://github.com/Hakanlsk">
                    <FaGithub className="text-2xl text-gray-700 hover:text-gray-900" />
                </a>
            </div>
            <div className="flex flex-row">
                <h3 className="font-medium mr-2">Furkan Karatekin</h3>
                <a target="_blank" href="https://www.linkedin.com/in/furkan-karatekin-479017234/">
                    <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-800 mr-2" />
                </a>
                <a target="_blank" href="https://github.com/furkankaratekin">
                    <FaGithub className="text-2xl text-gray-700 hover:text-gray-900" />
                </a>
            </div>
            
          </div>
        </div>
        </div>
        <Footer/>
      </div>

     );
}

export default Iletisim;