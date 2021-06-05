import React from 'react';
import "../app.css"

const Book=(props)=> {
    
    const CharacterLenght=(uzunluk)=>{
        return uzunluk.length>80 ? uzunluk.substring(0,50).concat("...") : uzunluk 
    }
    return (
        
        <div className="col-lg-4 col-sm-6 mb-4 mt-4">
        <div className="portfolio-item">
            <a className="portfolio-link" data-bs-toggle="modal" href={"#Modal"+props.hedef}>
                <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid w-100 img-height" src={props.link} alt="..." />
            </a>
            <div className="portfolio-caption">
                <div className="portfolio-caption-heading">{props.name}</div>
                <div className="portfolio-caption-heading">{props.yazar}</div>
                <div className="portfolio-caption-subheading text-muted">{CharacterLenght(props.slogan)}
                <a className="btn btn-primary ms-3 btn-sm" data-bs-toggle="modal" href={"#Modal"+props.hedef}>Devamı</a></div>
            </div>
        </div>
        <div className="portfolio-modal modal fade" id={"Modal"+props.hedef} tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    
                                    <h2 className="text-uppercase">{props.name}</h2>
                                    <p className="item-intro text-muted">{props.yazar}</p>
                                    <p>{props.slogan}</p>
                                    <img className="img-fluid d-block mx-auto img-height" src={props.link} alt="..." />
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-times me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    )
}



export default Book;

