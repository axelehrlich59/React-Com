import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom } from '@fortawesome/free-solid-svg-icons'


const commercialBloc1 = () => {

    return  <div style={{width:'100%', backgroundColor:'#E0E0E0'}}>    

                <div className='section_com'>
                    <small className='small'>section</small>
                    <h5 className='section_h5'>Commercial</h5>
                </div>

                <div className='container_main_bloc1'>

                        <div className='container_bloc1'>
                    

                                <div className='container_1'>
                                    <label style={{opacity:'0.5', fontWeight:'bold', color:'white'}}>
                                        Objectif
                                    </label>
                                    <label style={{color:'white', fontWeight:'bold', fontSize:'1.1em'}}>
                                        1 000 000 €
                                    </label>
                                </div>
                                <div className='container_2'>
                                    <label style={{color:'#2d2e2e'}}>
                                        Propales envoyées
                                    </label>
                                    <label style={{fontWeight:'bold', fontSize:'1.1em', color:'#40b7c9'}}>
                                        70
                                    </label>
                                </div>
                                <div className='container_3'>
                                    <label style={{opacity:'0.5', fontWeight:'bold', color:'white'}}>CA global</label>
                                    <label style={{color:'white', fontWeight:'bold', fontSize:'1.1em'}}>438 042 €</label>
                                </div>
                                <div className='container_4'>
                                    <label style={{color:'#2d2e2e'}}>Rendez-vous</label> 
                                    <label style={{fontWeight:'bold', fontSize:'1.1em', color:'#40b7c9'}}>118</label>      
                                </div>

                        </div>
                </div>  
       
       </div>

       ;
}


 const commercialBloc2 = () => {
    return (<div>
                    <div className='flex_main_container'>
                        <div className='main_container_pipe'>
                                <div className='container_logo'>
                                <FontAwesomeIcon className='icon' icon={faAtom} />
                                </div>
                                <div className='container_pipe'>
                                    <p className='p_pipe'>Pipe</p>
                                </div>
                                <div className='container_price'>
                                    <p className='p_price'>2 218 500 €</p>
                                </div>
                        </div>

                    </div>

                <div className='container_flex_second_block'>
                    <div className='container_second_block'>
                        <div className='container_first_column'> 
                                <div>
                                    <label className='label_first_column_1'>En cours de négo</label>
                                </div>
                                <div>
                                    <label className='label_first_column_2'>56</label>
                                </div>
                            </div>

                            <div className='container_second_column'>
                                <div>
                                    <label className='label_second_column_1'>Propales envoyées</label>
                                </div>
                                <div>
                                    <label className='label_second_column_2'>66</label>
                                </div>
                            </div>

                            <div className='container_third_column'>
                                <div>
                                    <label className='label_third_column_1'>Offres qualifiées</label>
                                </div>
                                <div>
                                    <label className='label_third_column_2'>96</label>
                                </div>
                            </div>
                    </div>

                </div>        
            </div>)
}

export {commercialBloc1,commercialBloc2};