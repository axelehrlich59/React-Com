import React from "react";

export default class marcomBloc1 extends React.Component{

    render() {
    return <div>
              
              
              <div className='section_mar'>
                    <small className='small'>section</small>
                    <h5 className='mar_h5'>Marcom</h5>
                </div>

              
              <div className='parent_contain'>
                <div className='container_bloc_1'>
                    <div className='container_all_column'>
                        <div className='container_column1'>
                            <div className='container_content1'>
                                <label className='container_content1_label1'>Actions</label><br />
                                <label className='container_content1_label2'>130</label>
                            </div>
                        </div>
                        <div className='container_column2'>
                            <div className='container_content2'>
                                <label className='container_content2_label1'>Mises en contact</label> <br />
                                <label className='container_content2_label2'>2519</label>
                            </div>
                        </div>
                        <div className='container_column3'>
                            <div className='container_content3'>
                                <label className='container_content3_label1'>Leads obtenus</label> <br />
                                <label className='container_content3_label2'>171</label>
                            </div>
                        </div>
                        <div className='container_column4'>
                            <div className='container_content4'>
                                <label className='container_content4_label1'>Coût / Lead</label> <br />
                                <label className='container_content4_label2'>3,24€</label>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
           </div>;
}}