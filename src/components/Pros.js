import React from 'react'
import logo from '../imgs/image.svg'
import logo1 from '../imgs/image1.svg'
import logo2 from '../imgs/image2.svg'

export default function Pros() {
    let content = [
        {
            url: logo,
            text: 'Giảm phí',
            des: 'Giao dịch chi phí thấp và ít trượt giá với các đồng tiền lớn'
        },
        {
            url: logo1,
            text: 'Cung cấp thanh khoản thuận tiện',
            des: 'Thêm thanh khoản cho một token duy nhất, tạo lập thị trường nhanh chóng.'
        },
        {
            url: logo2,
            text: 'Nhận hoa hồng',
            des: 'Nhận một phần phí giao dịch bên cạnh tiền lãi'
        }
    ]
    console.log(content)
    return (

        <div className='pros-container'>
            <div className='pros-label'>Ưu điểm</div>
            <div className='pros-item'>
                {
                    content.map(item => {
                        return <div key={item.text}>

                            <div>
                                <img src={item.url} alt='logo' />
                                <div className='pros-txt'>{item.text}</div>
                                <div className='pros-des'>{item.des}</div>
                            </div>
                        </div>


                    })
                }

            </div>


        </div>
    )
}
