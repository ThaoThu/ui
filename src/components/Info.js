import React from 'react'
import Slider from "react-slick";
import { Tooltip } from 'antd';
export default function Info() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        beforeChange: function (currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        }
    };
    const setting2 = {
        // ...settings,
        // slidesToShow: 2,
        // slidesToScroll: 2,
        dots: true,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    }

    const tooltip1 = (<>

        <div className="css-1yth19f">
            <div className="css-bvr9x2">USD APY:</div>
            <div className="css-1prv6g3">5.52%</div>
        </div>

        <div className="css-4cffwv">
            <div className="css-bvr9x2">Pool size:</div>
            <div className="css-woxzdh">10,198,208.28 USDT + 29,094,924.66 BUSD</div>
        </div>
    </>
    )

    let content = [
        {
            tooltip: tooltip1,
            pair: 'BUSD/USDT',
            percent: '5.5206%'
        },
        {
            tooltip: tooltip1,
            pair: 'BUSD/USDT',
            percent: '5.5206%'
        },
        {
            tooltip: tooltip1,
            pair: 'BUSD/USDT',
            percent: '5.5206%'
        },
        {
            tooltip: tooltip1,
            pair: 'BUSD/USDT',
            percent: '5.5206%'
        },

    ]
    let renderStable = () => {
        return <div className='info'>
            <div className='info__title'>
                <div className='info__title-txt'>Stable</div>
                <Tooltip title={'Tỷ suất lợi nhuận tính theo năm được dựa trên tỷ suất lợi nhuận cho các nhà cung cấp thanh khoản trong 7 ngày gần nhất, đã bao gồm lãi từ tiết kiệm linh hoạt. Nó bằng phần trăm thay đổi của giá trị cổ phần trong 7 ngày gần nhất / 7 * 365'} placement='bottom' color='#fff' overlayClassName='swap-tooltip'>

                    <div className='info__title-des'>APY 7 ngày</div>
                </Tooltip>
            </div>
            <div className='info__content'>
                <Slider {...settings}>

                    <div tabIndex={-1} className="css-t5tpnv" style={{ width: '100%', display: 'inline-block' }}>

                        {
                            content.map(item => {
                                return <Tooltip title={item.tooltip} placement='bottom' color='#fff' overlayClassName='swap-tooltip'>
                                    <div className="css-1d4v6v">
                                        <div className="css-xauaq2">{item.pair}</div>
                                        <div className="css-1398qvx">{item.percent}</div>
                                    </div>
                                </Tooltip>
                            })
                        }
                    </div>

                </Slider>
            </div>
        </div>
    }
    let renderInnovation = () => {
        return <div className='info '>
            <div className='info__title'>
                <div className='info__title-txt'>Innovation</div>
                <Tooltip title={'Thay đổi giá trị cổ phần 24h (SVC) là giá trị thay đổi trong vòng 24 giờ của mỗi cổ phần trong liquidity pool Innovation. Được cập nhật hàng giờ.'} placement='bottom' color='#fff' overlayClassName='swap-tooltip'>
                    <div className='info__title-des'>Lợi nhuận 24h</div>

                </Tooltip>
            </div>
            <div className='info__content'>
                <Slider {...setting2}>

                    <div className="css-t5tpnv" style={{ width: '100%', display: 'inline-block' }}>

                        {
                            content.map(item => {
                                return <Tooltip title={item.tooltip} placement='bottom' color='#fff' overlayClassName='swap-tooltip'>
                                    <div className="css-1d4v6v">
                                        <div className="css-xauaq2">{item.pair}</div>
                                        <div className="css-1398qvx">{item.percent}</div>
                                    </div>
                                </Tooltip>
                            })
                        }
                    </div>
                    {/* <div lassName="css-t5tpnv" style={{ width: '100%', display: 'inline-block' }}>

                        {
                            content.map(item => {
                                return <Tooltip title={item.tooltip} placement='bottom' color='#fff' overlayClassName='swap-tooltip'>
                                    <div className="css-1d4v6v">
                                        <div className="css-xauaq2">{item.pair}</div>
                                        <div className="css-1398qvx">{item.percent}</div>
                                    </div>
                                </Tooltip>
                            })
                        }
                    </div> */}

                </Slider>
            </div>
        </div>
    }

    return (
        <div className='info-container'>
            {
                renderStable()
            }
            {
                renderInnovation()
            }

        </div>
    )
}
