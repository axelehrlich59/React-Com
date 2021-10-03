import React from "react";

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
                                        1 000 000 $
                                    </label>
                                </div>
                                <div className='container_2'>
                                    <label style={{fontWeight:'bold'}}>
                                        Propales envoyées
                                    </label>
                                    <label style={{fontWeight:'bold', fontSize:'1.1em', color:'#33bbff'}}>
                                        70
                                    </label>
                                </div>
                                <div className='container_3'>
                                    <label style={{opacity:'0.5', fontWeight:'bold', color:'white'}}>CA global</label>
                                    <label style={{color:'white', fontWeight:'bold', fontSize:'1.1em'}}>438 042 $</label>
                                </div>
                                <div className='container_4'>
                                    <label style={{fontWeight:'bold'}}>Rendez-vous</label> 
                                    <label style={{fontWeight:'bold', fontSize:'1.1em', color:'#33bbff'}}>118</label>      
                                </div>

                        </div>
                </div>  
       
       </div>

       ;
}

export default commercialBloc1;