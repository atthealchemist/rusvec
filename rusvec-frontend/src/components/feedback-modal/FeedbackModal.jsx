import React, { Component } from 'react';

class FeedbackModal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="modal" id="modal">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <form id="modal-form" onsubmit="return sendEmail();">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Обратная связь</p>
                            <button onclick="closeModal()" className="delete" aria-label="close"></button>
                        </header>
                        <section className="modal-card-body">
                            <div className="field">
                                <label className="label">Как к вам обращаться</label>
                                <div className="control">
                                    <input id="modal-form-name" className="input" type="text" aria-autocomplete="list" placeholder="Например, Петров Алексей" required />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">E-mail</label>
                                <div className="control">
                                    <input id="modal-form-email" className="input" type="email" placeholder="Например, lorem@ipsum.do" required />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Телефон</label>
                                <div className="control">
                                    <input id="modal-form-phone" className="input" type="tel" placeholder="Например, +79991112233" required />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Сообщение</label>
                                <div className="control">
                                    <textarea id="modal-form-message" className="textarea" placeholder="Ваше сообщение (необязательно)"></textarea>
                                </div>
                            </div>
                        </section>
                        <footer className="modal-card-foot">
                            <button type="submit" className="button is-success">Заказать обратный звонок</button>
                        </footer>
                    </form>
                </div>
            </div>
        );
    }
}

export default FeedbackModal;