import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className="about container" id='about' style={{height:'90vh', backgroundColor:'#5C8374', marginTop:'10vh'}}>
        <div className="row my-3 d-flex justify-content-evenly">
            <div className="card mx-1 col-md-5 text-white mb-3" >
                <div className="card-header"><h4>Current Education</h4></div>
                <div className="card-body">
                <h5 className="card-title">Manit (NIT-B) </h5>
                <hr />
                <p className="card-text">I am currently pursuing a B.Tech in Electrical Engineering and am set to graduate in 2026.</p>
            </div> 

        </div>
        <div className="card col-md-5 mx-1 text-white mb-3" >
            <div className="card-header"><h4>std. - 10<sup>th</sup> </h4></div>
                <div className="card-body">
                <h5 className="card-title">Indian Public School, Purnea(Bihar)</h5>
                <hr />
                <p className="card-text">Passed with 94.3% in 2019</p>
            </div> 
        </div>
        <div className="card col-md-5 mx-1 text-white mb-3" >
                <div className="card-header"><h4>std. - 12<sup>th</sup> </h4></div>
                    <div className="card-body">
                    <h5 className="card-title">Millia Convent English School, Purnea(Bihar)</h5>
                    <hr />
                    <p className="card-text"> Passed 12th grade in 2021 and took a gap year to prepare for the JEE</p>
                </div> 
            </div>
            <div className="card col-md-5 mx-1 text-white mb-3" >
                <div className="card-header"><h4 style={{marginTop:"2px"}}>Hobbies</h4></div>
                   <hr />
                    <div className="card-body">
                    {/* <h5 className="card-title">Primary card title</h5> */}
                    <ul>
                        <li>Problem-Solving Puzzles</li>
                        <li>Sports-Cricket</li>
                        <li>Entertainment- Music,Anime</li>
                    </ul>
                </div> 
            </div>
        </div>
    </div>  
  )
}
