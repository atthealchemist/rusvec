import React, { Component } from 'react';

import Client from "../client/Client";
import FeedbackFab from "../feedback-fab/FeedbackFab";
import FeedbackModal from "../feedback-modal/FeedbackModal";
import ProductList from '../product-list/ProductList';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {}

        this.products = [
            {
                id: 0,
                title: "Складское помещение по адресу",
                address: "Москва, ул. Новорогожская д.32",
                profit: {
                    value: 32,
                    currency: "млн. рублей"
                },
                images: [
                    "http://project-stu.com/img/carusel/fevral_1.jpg",
                    "http://project-stu.com/img/carusel/fevral_2.jpg"
                ]
            },
            {
                id: 1,
                title: "Title",
                address: "Санкт-Петербург, Лиговский прспкт 12",
                profit: {
                    value: 16,
                    currency: "млн. рублей"
                },
                images: [
                    "http://project-stu.com/img/carusel/lagovsk_1.jpg",
                    "http://project-stu.com/img/carusel/lagovsk_2.jpg"
                ]
            }
        ]

        this.clients = [
            "http://project-stu.com/img/logos/eb.png",
            "http://project-stu.com/img/logos/nv.png",
            "http://project-stu.com/img/logos/pa.png",
            "http://project-stu.com/img/logos/x5.png",
            "http://project-stu.com/img/logos/dx.png",
            "http://project-stu.com/img/logos/gf.png",
            "http://project-stu.com/img/logos/ms.png",
            "http://project-stu.com/img/logos/ks.png",
            "http://project-stu.com/img/logos/sa.png",
            "http://project-stu.com/img/logos/bo.png",
            "http://project-stu.com/img/logos/ck.png",
            "http://project-stu.com/img/logos/mw.png",
        ]

        this.map = {
            position: [51.5, -0.09],
            markers: [
                {
                    position: [51.5, -0.09],
                    popup: {
                        title: "Наш адрес в Москве",
                        address: "Москва, ул. Академика Сахарова д.22 корп. 1",
                        phone: "8 495 393-83-73"
                    }
                }
            ]
        }

    }

    render() {
        return (<main>
            <section className="section development">
                <div className="container sticker-white section-title">
                    Разработка специальных технических условий пожарной безопасности (СТУ)
                    с согласованием в органах МЧС России и в Минстрой России
                по территориальному признаку &ndash; <span className="sticker">950.000 рублей.</span>
                </div>
            </section>
            <section className="section chart">
                <div className="section-header">Надёжность</div>
                <div className="chart-container">
                    <img src="assets/images/reliably.png" alt="" />
                    <div className="details">
                        <ul className="details-list">
                            <li className="details-item"><span className="details-item-value">1</span> клик</li>
                            <li className="details-item"><span className="details-item-value">20</span> рабочих дней</li>
                            <li className="details-item"><span className="details-item-value">15%</span> экономии инвестиций</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="section examples">
                <div className="section-header">Примеры наших работ</div>
                <div className="container">
                    <ProductList products={this.products} />
                </div>
            </section>
            <section className="section clients">
                <div className="section-header">Наши клиенты</div>
                <div className="clients-container">
                    {this.clients.map((client, index) => {
                        return (
                            <div key={index} className="client">
                                <Client logo={client} />
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className="section branches">
                <div className="section-header">Карта наших офисов</div>
                <div className="map-container">
                    <Map position={this.map.position} zoom={13}>
                        <TileLayer
                            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        />
                        {this.map.markers.map((marker, index) => {
                            return (
                                <Marker key={index} position={marker.position}>
                                    <Popup>{marker.popup.title}:<br /> <strong>{marker.popup.address}</strong><br /> Телефон: <a href="tel:84953938373">{marker.popup.phone}</a></Popup>
                                </Marker>
                            )
                        })}
                    </Map>
                </div>
            </section>
            <FeedbackFab />
            <FeedbackModal />
        </main>
        );
    }
}

export default Main;