import React from "react";

class Component1 extends React.Component {
    state = {
        value: 0
    }

    handleMinus = () => {
        if (this.state.value > 0) {
            this.setState({value: this.state.value - 1});
        }
    }

    handlePlus = () => {
        this.setState({value: this.state.value + 1});
    }

    render() {
        return (
            <div>
                <h3>My Portfolio - {this.props.name}</h3>
                <p>Perkenalkan nama saya {this.props.name}. Saya berasal dari Semarang. Saya berminat untuk mempelajari Web Development. Salam kenal semuanya.</p>
                    
                <h4>Latar Belakang Pendidikan</h4>
                <ul>
                  <li>SD PL Don Bosko Semarang</li>
                  <li>SMP PL Domenico Savio Semarang</li>
                  <li>SMAN 3 Semarang</li>
                  <li>Universitas Gadjah Mada</li>
                </ul>
                <hr />

                <p>Mencoba state</p>
                <button onClick={this.handleMinus}>-</button>
                <span>{'  '} {this.state.value} {'  '}</span>
                <button onClick={this.handlePlus}>+</button>

                <hr />
            </div>
        )
    }
}

export default Component1;