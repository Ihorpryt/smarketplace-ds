import React from "react";
import {SMeme} from "./styles";
import Input from "../System/Input/Input";
import {SRow} from "../Layout/styles";

const Meme = () => {
  return (
        <SMeme>
            <form>
                <SRow>
                    <Input />
                    <Input />
                </SRow>


                <button>Generate new image</button>
            </form>
        </SMeme>
  );
};

export default Meme;