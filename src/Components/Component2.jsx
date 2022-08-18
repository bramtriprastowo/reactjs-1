import { useState } from "react";

const FunctionComponent2 = ({subtitle}) => {
    const [value, setValue] = useState(0);

    const handleMinus = () => {
        if (value > 0 ) {
            setValue(value - 1);
        }
    }

    const handlePlus = () => {
        setValue(value + 1);
    }

    return (
        <div>
            <h4>{subtitle}</h4>
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Skill</th>
                  <th>Teknologi yang digunakan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Front End</td>
                  <td>HTML, CSS, Javascript, Bootstrap</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Back End</td>
                  <td>MySQL</td>
                </tr>
              </tbody>
            </table>

            <hr />
            <p>Mencoba state</p>
            <button onClick={handleMinus}>-</button>
            <span>{'  '} {value} {'  '}</span>
            <button onClick={handlePlus}>+</button>
        </div>
    )
}

export default FunctionComponent2;