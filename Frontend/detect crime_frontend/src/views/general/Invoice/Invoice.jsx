import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class Invoice extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Invoice</h1>
                        </div>
                    </div>


                            
    


                    <div className="col-xl-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Invoice</h2>
                                
                            </header>
                            <div className="content-body">    <div className="">
                                    <div className="col-12">



                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-12 invoice-head">
                                                <div className="">
                                                    <div className="row margin-0">
                                                        <div className="col-12 invoice-title">
                                                            <h2 className="">Invoice</h2>    
                                                            <span className="invoice-order">Order # 12345, 21st Jan 2019</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            <div className="clearfix"></div>
                                            <div className="row invoice-info">
                                            <div className="col-lg-3 col-md-6 invoice-infoblock">
                                                <h4>Billed To: John Smith</h4>
                                                <p>
                                                    <span className='text-muted'>1234 Main Street, Apt. 34/4B<br/>
                                                        Springfield, ST 54321</span>
                                                </p>
                                            </div>

                                            <div className="col-lg-3 col-md-6 invoice-infoblock">
                                                <h4>Payment: Credit Card</h4>
                                                <p>
                                                    Visa **** **** **** 4242<br/>
                                                        jsmith@email.com
                                                </p>
                                            </div>

                                            <div className="col-lg-3 col-md-6 invoice-infoblock">
                                                <h4>Address: </h4>
                                                <p>
                                                    795 Folsom Ave, Suite 600<br/>
                                                    San Francisco, CA 94107
                                                </p>
                                            </div>

                                            <div className="col-lg-3 col-md-6 invoice-infoblock">
                                                <div className="invoice-due">
                                                    <h4>Total Due:</h4>
                                                    <h2 className="text-primary">$2140.00</h2>                
                                                </div>

                                            </div>
                                        </div>
                                        </div>


                                            <div className="clearfix"></div>
                                            <div className="spacer"></div>
                                            <div className="spacer"></div>

                                        </div>

                                        <div className="row">
                                            <div className="col-12 invoice-summary">
                                                <div className="table-responsive">
                                                    <table className="table table-hover invoice-table">
                                                        <thead>
                                                            <tr>
                                                                <td><h4>Item</h4></td>
                                                                <td className="text-center"><h4>Price</h4></td>
                                                                <td className="text-center"><h4>Quantity</h4></td>
                                                                <td className="text-right"><h4>Totals</h4></td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            <tr>
                                                                <td>Grocery items</td>
                                                                <td className="text-center">$10.99</td>
                                                                <td className="text-center">1</td>
                                                                <td className="text-right">$10.99</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Keyboard and Mouse</td>
                                                                <td className="text-center">$20.00</td>
                                                                <td className="text-center">3</td>
                                                                <td className="text-right">$60.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Laptop 500GB</td>
                                                                <td className="text-center">$600.00</td>
                                                                <td className="text-center">1</td>
                                                                <td className="text-right">$600.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Sunglasses</td>
                                                                <td className="text-center">$100.00</td>
                                                                <td className="text-center">1</td>
                                                                <td className="text-right">$100.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Wrist Watch</td>
                                                                <td className="text-center">$101.99</td>
                                                                <td className="text-center">1</td>
                                                                <td className="text-right">$101.99</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mobile phone cover</td>
                                                                <td className="text-center">$20.00</td>
                                                                <td className="text-center">3</td>
                                                                <td className="text-right">$60.00</td>
                                                            </tr>

                                                            <tr>
                                                                <td className="thick-line"></td>
                                                                <td className="thick-line"></td>
                                                                <td className="thick-line text-center"><h4>Subtotal</h4></td>
                                                                <td className="thick-line text-right"><h4>$1670.99</h4></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="no-line"></td>
                                                                <td className="no-line"></td>
                                                                <td className="no-line text-center"><h4>Shipping</h4></td>
                                                                <td className="no-line text-right"><h4>$15</h4></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="no-line"></td>
                                                                <td className="no-line"></td>
                                                                <td className="no-line text-center"><h4>VAT</h4></td>
                                                                <td className="no-line text-right"><h4>$150.23</h4></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="no-line"></td>
                                                                <td className="no-line"></td>
                                                                <td className="no-line text-center"><h4>Total</h4></td>
                                                                <td className="no-line text-right"><h3 style={{margin:0}} className="text-primary">$1985.99</h3></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="clearfix"></div><br/>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-12 text-center">
                                                <a href="#!" target="_blank" className="btn btn-primary btn-md"><i className="i-printer"></i> &nbsp; Print </a> &nbsp;        
                                                <a href="#!" target="_blank" className="btn btn-accent btn-md"><i className="i-paper-plane"></i> &nbsp; Send </a>        
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </section></div>






                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default Invoice;
