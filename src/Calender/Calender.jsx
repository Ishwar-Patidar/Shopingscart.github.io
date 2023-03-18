import React from 'react'
import './Calender.css'
import Date from './Date'
function Calender() {
    return (
        <>
            <div className="container main_div d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-12 secondary_div">
                        <div className="row text-center">
                            <h1 className="title">Calender</h1>
                        </div>
                        <div className="row text-center mt-3 mb-2">
                        <div className="col"> <span className='day rounded-pill  '>Sun</span></div>
                        <div className="col"> <span className='day rounded-pill '>Mon</span></div>
                        <div className="col"> <span className='day rounded-pill '>Tue</span></div>
                        <div className="col"> <span className='day rounded-pill '>Wed</span></div>
                        <div className="col"> <span className='day rounded-pill '>Thu</span></div>
                        <div className="col"> <span className='day rounded-pill '>Fri</span></div>
                        <div className="col"> <span className='day rounded-pill '>Sat</span></div>
                        </div>
                        <div className="row text-center "  >
                            <div className="col d-flex flex-column"> 
                            <span className='date mt-2  '>1</span>
                            <span className='date mt-2  '>8</span>
                            <span className='date mt-2  '>15</span>
                            <span className='date mt-2  '>22</span>
                            <span className='date mt-2  '>29</span>
                            </div>                      
                            <div className="col d-flex flex-column"> 
                            <span className='date mt-2  '>2</span>
                            <span className='date mt-2  '>9</span>
                            <span className='date mt-2  '>16</span>
                            <span className='date mt-2  '>23</span>
                            <span className='date mt-2  '>30</span>
                            </div>                      
                            <div className="col d-flex flex-column"> 
                            <span className='date mt-2  '>3</span>
                            <span className='date mt-2  '>10</span>
                            <span className='date mt-2  '>17</span>
                            <span className='date mt-2  '>24</span>
                            <span className='date mt-2  '>31</span>
                            </div>                      
                            <div className="col d-flex flex-column"> 
                            <span className='date mt-2  '>4</span>
                            <span className='date mt-2  '>11</span>
                            <span className='date mt-2  '>18</span>
                            <span className='date mt-2  '>25</span>
                            <span className='date mt-2  '>1</span>
                            </div>                      
                            <div className="col d-flex flex-column"> 
                            <span className='date mt-2  '>5</span>
                            <span className='date mt-2  '>12</span>
                            <span className='date mt-2  '>19</span>
                            <span className='date mt-2  '>26</span>
                            <span className='date mt-2  '>2</span>
                            </div>                      
                            <div className="col d-flex flex-column"> 
                            <span className='date mt-2  '>6</span>
                            <span className='date mt-2  '>13</span>
                            <span className='date mt-2  '>20</span>
                            <span className='date mt-2  '>27</span>
                            <span className='date mt-2  '>3</span>
                            </div>                      
                            <div className="col d-flex flex-column"> 
                            <span className='date mt-2  '>7</span>
                            <span className='date mt-2  '>14</span>
                            <span className='date mt-2  '>21</span>
                            <span className='date mt-2  '>28</span>
                            <span className='date mt-2  '>4</span>
                            </div>                      
                                              
                        </div>
                    </div>
                </div>
            </div>
            <Date/>
        </>
    )
}

export default Calender