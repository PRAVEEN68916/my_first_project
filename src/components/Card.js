import React from 'react';
import cat1 from '../Image/cat1.jpg';
import cat2 from '../Image/cat2.jpg';
import cat3 from '../Image/cat3.jpg';   
import cat4 from '../Image/cat4.jpg';
import cat5 from '../Image/cat5.jpg';
import cat6 from '../Image/cat6.jpg';
import cat7 from '../Image/cat7.jpg';
import cat8 from '../Image/cat8.jpg';
import cat9 from '../Image/cat9.jpg';
import cat10 from '../Image/cat10.jpg';

function cards() {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="cards card">
                        <img src={cat1} className="cards-img-top"style={{width: "100%", height:"250px"}} alt="..."/>
                            <div className="cards-body">
                                <h5 className="cards-title">cards title</h5>
                                <p className="cards-text">This is a longer cards with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="cards card">
                        <img src={cat2} className="cards-img-top"style={{width: "100%", height:"250px"}} alt="..."/>
                            <div className="cards-body">
                                <h5 className="cards-title">cards title</h5>
                                <p className="cards-text">This is a longer cards with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="cards card">
                        <img src={cat3} className="cards-img-top"style={{width: "100%", height:"250px"}} alt="..."/>
                            <div className="cards-body">
                                <h5 className="cards-title">cards title</h5>
                                <p className="cards-text">This is a longer cards with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="cards card">
                        <img src={cat4} className="cards-img-top"style={{width: "100%", height:"250px"}} alt="..."/>
                            <div className="cards-body">
                                <h5 className="cards-title">cards title</h5>
                                <p className="cards-text">This is a longer cards with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="cards card">
                        <img src={cat5} className="cards-img-top"style={{width: "100%", height:"250px"}} alt="..."/>
                            <div className="cards-body">
                                <h5 className="cards-title">cards title</h5>
                                <p className="cards-text">This is a longer cards with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="cards card">
                        <img src={cat6} className="cards-img-top"style={{width: "100%", height:"250px"}} alt="..."/>
                            <div className="cards-body">
                                <h5 className="cards-title">cards title</h5>
                                <p className="cards-text">This is a longer cards with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="cards card">
                        <img src={cat7} className="cards-img-top"style={{width: "100%", height:"250px"}} alt="..."/>
                            <div className="cards-body">
                                <h5 className="cards-title">cards title</h5>
                                <p className="cards-text">This is a longer cards with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="cards card">
                        <img src={cat8} className="cards-img-top"style={{width: "100%", height:"250px"}} alt="..."/>
                            <div className="cards-body">
                                <h5 className="cards-title">cards title</h5>
                                <p className="cards-text">This is a longer cards with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="cards card">
                        <img src={cat9} className="cards-img-top"style={{width: "100%", height:"250px"}} alt="..."/>
                            <div className="cards-body">
                                <h5 className="cards-title">cards title</h5>
                                <p className="cards-text">This is a longer cards with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="cards card">
                        <img src={cat10} className="cards-img-top" style={{width: "100%", height:"250px"}} alt="..."/>
                            <div className="cards-body">
                                <h5 className="cards-title">cards title</h5>
                                <p className="cards-text">This is a longer cards with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cards
