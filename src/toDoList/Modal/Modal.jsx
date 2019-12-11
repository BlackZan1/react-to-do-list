import React from 'react';
import './Modal.scss';

class Modal extends React.Component {
    state = {
        isOpen: false,
    }

    render() {
        return (
            <React.Fragment>
                <button className="Modal-btn" onClick={() => this.setState({ isOpen: true })}>Open</button>

                {
                    this.state.isOpen && (
                        <div className="Modal">
                            <div className="Modal-body">
                                <div className="Modal-text">
                                    <h1>Цитата Дня</h1>

                                    <h3>
                                        Никогда нельзя отказываться от мечты! 
                                        Мечты питают нашу душу, так же, как пища питает тело. Сколько бы раз в жизни нам ни пришлось пережить крушение и видеть, 
                                        как разбиваются наши надежды, 
                                        мы все равно должны продолжать мечтать.
                                    </h3>

                                    <p>-Пауло Коэльо</p>
                                </div>

                                <button className="Modal-btn" onClick={() => this.setState({ isOpen: false })}>Close</button>
                            </div>
                            
                        </div>
                    )
                }
                
            </React.Fragment>
        );
    }
}

export default Modal;