import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHandPointUp } from '@fortawesome/free-solid-svg-icons';
   
 export default class marcomBloc2 extends React.Component {
     render() {
        return (<div>
            <div className='container_parent'>
              <div className='container_main_bloc2'>
                  <div className='container_bloc2'>

                     

                      <div className='column1'>
                            <div className='container_icon_bloc2'>
                                <FontAwesomeIcon className='eye_icon' icon={faEye} />
                            </div>

                            <div className='container_label_bloc2'>
                                <label className='column1_label1'>Vues</label> <br/>
                                <label className='column1_label2'>1282</label>
                            </div>
                      </div>

                      <div className='column2'>
                            <div className='container_icon_bloc2'>
                            <FontAwesomeIcon className='hand_icon' icon={faHandPointUp} />
                            </div>
                            <div className='container_label_bloc2'>  
                                <label className='column2_label1'>Interractions</label> <br />
                                <label className='column2_label2'>54</label>
                            </div>
                      </div>
                  </div>
              </div>
            </div>  

          </div>);

     }
 }