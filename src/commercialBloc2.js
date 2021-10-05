import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom, faHourglass, faPaperPlane, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

  export default class commercialBloc2 extends React.Component {

    render() {

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
                                    <label className='label_first_column_2'><FontAwesomeIcon icon={faHourglass}/> 56</label>
                                </div>
                            </div>

                            <div className='container_second_column'>
                                <div>
                                    <label className='label_second_column_1'>Propales envoyées</label>
                                </div>
                                <div>
                                    <label className='label_second_column_2'><FontAwesomeIcon icon={faPaperPlane} /> 66</label>
                                </div>
                            </div>

                            <div className='container_third_column'>
                                <div>
                                    <label className='label_third_column_1'>Offres qualifiées</label>
                                </div>
                                <div>
                                    <label className='label_third_column_2'><FontAwesomeIcon icon={faCheckSquare} /> 96</label>
                                </div>
                            </div>
                    </div>

                </div>        
            </div>);
    }
}
