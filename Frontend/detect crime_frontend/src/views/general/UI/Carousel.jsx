import React from 'react';
import {
    Carousel,  CarouselItem,  CarouselControl,  CarouselIndicators,  CarouselCaption,
    UncontrolledCarousel ,
    Row, Col, 
} from 'reactstrap';

import {
   
} from 'components';


var IMGDIR = process.env.REACT_APP_IMGDIR;

const items = [
  {
    src: IMGDIR+'/images/general/carousel/carousel-1.jpg',
    altText: 'Beautiful View',
    caption: 'Amazing landscape to touch your soul'
  },
  {
    src: IMGDIR+'/images/general/carousel/carousel-2.jpg',
    altText: 'Photography is an Art',
    caption: 'It touches your soul with subtleness'
  },
  {
    src: IMGDIR+'/images/general/carousel/carousel-3.jpg',
    altText: 'Nature amazes you',
    caption: 'It never stops to amaze you'
  }
];

const items1 = [
  {
    src: IMGDIR+'/images/general/carousel/carousel-5.jpg',
    altText: 'Photography is an Art',
    caption: 'It touches your soul with subtleness'
  },
  {
    src: IMGDIR+'/images/general/carousel/carousel-6.jpg',
    altText: 'Nature amazes you',
    caption: 'It never stops to amaze you'
  },
  {
    src: IMGDIR+'/images/general/carousel/carousel-4.jpg',
    altText: 'Beautiful View',
    caption: 'Amazing landscape to touch your soul'
  },
];

class UICarousels extends React.Component{
   constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
    render(){

            const { activeIndex } = this.state;

                const slides = items.map((item) => {
                  return (
                    <CarouselItem
                      onExiting={this.onExiting}
                      onExited={this.onExited}
                      key={item.src}
                    >
                      <img src={item.src} alt={item.altText} className="carousel-bg-img" />
                      <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                    </CarouselItem>
                  );
                });

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Carousel</h1>
                        </div>
                    </div>


                            


                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Carousel</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">

        

      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>




                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>



                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Uncontrolled Carousel</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">

        
<UncontrolledCarousel items={items1} />;

                                

                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>

                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default UICarousels;
