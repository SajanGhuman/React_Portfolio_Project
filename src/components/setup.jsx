import React from "react";
import { Button, Text, Radio } from "@SajanGhuman/component-library";
const Setup = () => {
  return (
    <div
      id="setup"
      className="select-none bg-custom-gray text-white font-general_sans h-[100vh] w-[100vw] flex text-center justify-center items-center"
    >
      <div className="max-w-7xl mx-auto bg-custom-gray">
        <Text
          className="font-bold text-[50px] font-general_sans text-gray-800 mb-4"
          types="paragraph"
          text="Developer Setup"
          bold
          style={{ color: "#f3f3f3" }}
        />
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-semibold text-gray-900">
              VsCode Setup
            </h3>
            <ul>
              <li>
                <Radio />
                <Text
                  className="font-bold text-[15px] font-general_san mb-4"
                  types="paragraph"
                  text="ES7+ Snippets"
                  bold
                  style={{ color: "black" }}
                />
              </li>
              <li>
                <Radio />
                <Text
                  className="font-bold text-[15px] font-general_san mb-4"
                  types="paragraph"
                  text="Live Server"
                  bold
                  style={{ color: "black" }}
                />
              </li>
              <li>
                <Radio />
                <Text
                  className="font-bold text-[15px] font-general_san mb-4"
                  types="paragraph"
                  text="Docker Extension"
                  bold
                  style={{ color: "black" }}
                />
              </li>
              <li>
                <Radio />
                <Text
                  className="font-bold text-[15px] font-general_san mb-4"
                  types="paragraph"
                  text="Default window shortcuts"
                  bold
                  style={{ color: "black" }}
                />
              </li>
            </ul>

            <p className="mt-1 text-sm text-gray-600"></p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Terminal Setup
            </h3>
            <ul>
              <li>
                <Radio />
                <Text
                  className="font-bold text-[15px] font-general_san mb-4"
                  types="paragraph"
                  text="Default Linux Terminal (Kitty: Pokemon Theme)"
                  bold
                  style={{ color: "black" }}
                />
              </li>
              <li>
                <Radio />
                <Text
                  className="font-bold text-[15px] font-general_san mb-4"
                  types="paragraph"
                  text="Node Package Manager (NPM)"
                  bold
                  style={{ color: "black" }}
                />
              </li>
            </ul>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Preferred Editor Font
            </h3>
            <ul>
              <li>
                <Radio />
                <Text
                  className="font-bold text-[15px] font-general_san mb-4"
                  types="paragraph"
                  text="Atomic Dark Theme"
                  bold
                  style={{ color: "black" }}
                />
              </li>
              <li>
                <Radio />
                <Text
                  className="font-bold text-[15px] font-general_san mb-4"
                  types="paragraph"
                  text="Font Theme: Consolas"
                  bold
                  style={{ color: "black" }}
                />
              </li>
              <li>
                <Radio />
                <Text
                  className="font-bold text-[15px] font-general_san mb-4"
                  types="paragraph"
                  text="Preetier Code Formatter"
                  bold
                  style={{ color: "black" }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setup;
