import CountUp from '@/components/customs/react-bits/CountUp'
import BlurCircle from '../../customs/blur-circle'

export default function Analysis() {
    return (
        <section
            className="relative flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[80px]"
        >
            <div className='w-full order-2 lg:order-1 aspect-square rounded-[20px] md:rounded-[60px] bg-slate-300'>
            </div>

            <div className='order-1 lg:order-2 w-full space-y-[30px]'>
                <div className='space-y-[15px]'>
                    <div
                        className='flex justify-center lg:justify-start'
                    >
                        <h3 className='w-fit text-[14px] lg:text-[16px] text-darkBold font-medium px-[20px] lg:px-[25px] py-[10px] lg:py-[15px] rounded-[99px] bg-yellowMedium'>Số liệu thống kê</h3>
                    </div>

                    <div className='text-center lg:text-left space-y-[20px]'>
                        <h2 className='text-[30px] md:text-[36px] xl:text-[48px] font-bold text-darkBold'>
                            Hành trình thành công cùng khách hàng.
                        </h2>
                        <p className='text-[14px] sm:text-[16px] lg:text-[18px] text-darkBland'>
                            Tiết kiệm thời gian, tối đa hiệu quả với những con số đáng tin cậy.
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-x-[25px] gap-y-[35px]'>
                    <div className='flex flex-col items-center lg:items-start space-y-[4px]'>
                        <span className='text-[26px] md:text-[36px] xl:text-[48px] font-bold text-yellowBold flex items-center gap-[5px]'>
                            <CountUp
                                from={0}
                                to={10}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />
                            <p>x</p>
                        </span>

                        <p className='text-[13px] text-center lg:text-left lg:text-[16px] text-darkMedium'>Tăng năng suất</p>
                    </div>

                    <div className='flex flex-col items-center lg:items-start space-y-[4px]'>
                        <span className='text-[26px] md:text-[36px] xl:text-[48px] font-bold text-yellowBold flex items-center gap-[5px]'>
                            <CountUp
                                from={0}
                                to={300}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />
                            <p>%</p>
                        </span>

                        <p className='text-[13px] text-center lg:text-left lg:text-[16px] text-darkMedium'>Tỷ suất hoàn vốn</p>
                    </div>

                    <div className='flex flex-col items-center lg:items-start space-y-[4px]'>
                        <span className='text-[26px] md:text-[36px] xl:text-[48px] font-bold text-yellowBold flex items-center gap-[5px]'>
                            <CountUp
                                from={0}
                                to={5000}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />
                            <p>+</p>
                        </span>

                        <p className='text-[13px] text-center lg:text-left lg:text-[16px] text-darkMedium'>Các khách hàng hài lòng</p>
                    </div>

                    <div className='flex flex-col items-center lg:items-start space-y-[4px]'>
                        <span className='text-[26px] md:text-[36px] xl:text-[48px] font-bold text-yellowBold flex items-center gap-[5px]'>
                            <CountUp
                                from={0}
                                to={100}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />
                            <p>+</p>
                        </span>

                        <p className='text-[13px] text-center lg:text-left lg:text-[16px] text-darkMedium'>Các đánh giá 5 sao</p>
                    </div>
                </div>
            </div>

            <BlurCircle className="left-0 bottom-0 translate-x-[-50%] translate-y-[50%]" />
        </section>
    )
}