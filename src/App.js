/* eslint-disable no-new-func */
import { useState } from "react";

/* npm start:
cd "C:\Users\Patri\OneDrive\Desktop\Web Projects\React Projects\react-calculator"
*/

function App() {
   const [calc, setCalc] = useState("");
   const [ans, setAns] = useState("0");
   const ops = ["/", "*", "+", "-"];

   const createDigits = () => {
      const digits = [];
      for (let i = 1; i < 10; i++) {
         digits.push(
            <button onClick={() => updateCalc(i.toString())} key={i}>
               {i}
            </button>
         );
      }
      return digits;
   };
   const updateCalc = (val) => {
      // updates the current calculation on the display
      if (
         (ops.includes(val) && calc === "") ||
         (ops.includes(val) && ops.includes(calc.slice(-1)))
      )
         return;
      setCalc(calc + val);
      if (!ops.includes(val)) {
         setAns(Function("return " + calc + val)().toString());
      }
   };
   const delete_ = () => {
      const newCalc = calc.slice(0, -1);
      setCalc(newCalc);
      if (!ops.includes(newCalc.slice(-1))) {
         setAns(Function("return " + newCalc)().toString());
      }
   };
   const clear = () => {
      setCalc("");
   };
   const equals = () => {
      setCalc(ans);
   };

   return (
      <div className="App flex-center">
         <div className="calculator">
            <div className="display">
               <span>({ans})</span><br/>
               {calc || "0"}
            </div>

            <div className="operators">
               <button onClick={() => updateCalc("/")}>/</button>
               <button onClick={() => updateCalc("*")}>*</button>
               <button onClick={() => updateCalc("+")}>+</button>
               <button onClick={() => updateCalc("-")}>-</button>
            </div>

            <div className="secondary">
               <button onClick={() => delete_()}>del</button>
               <button onClick={() => clear()}>C</button>
               <button onClick={() => updateCalc('(')}>(</button>
               <button onClick={() => updateCalc(')')}>)</button>
            </div>

            <div className="digits">
               {createDigits()}
               <button onClick={() => updateCalc("0")}>0</button>
               <button onClick={() => updateCalc(".")}>.</button>
               <button onClick={() => equals()}>=</button>
            </div>
         </div>
      </div>
   );
}

export default App;
