import React from "react";
import Image from "next/image";
import Link from "next/link";

const MainFooter = () => {
  return (
    <div className="mt-4 h-full w-full bg-footerColor ">
      <div className="relative left-4 right-4 top-6 h-20 w-[98%]">
        <Image src={"/footerPictures/image 1.png"} layout={"fill"} />
      </div>
      <div className="mt-8">
        <div className="flex flex-wrap">
          <div
            className="flex basis-1/2  items-center justify-center text-white"
            style={{ direction: "rtl" }}
          >
            <div className="mr-4 grid  grid-cols-footer grid-rows-nowork">
              <div className=" col-start-1 col-end-3 row-start-1  flex items-center justify-center text-mainFooterLink">
                <ul>
                  <li><Link href="/">بازی های جدید</Link></li>
                  <li><Link href="newGames">بازی های تخفیف</Link></li>
                  <li> <Link href="offGames">بازی های پر فروش</Link></li>
                  <li><Link href="contact">تمامی بازی ها</Link></li>
                </ul>
              </div>
{/*              <div className="col-start-2 row-start-1 flex items-center justify-center text-mainFooterLink">
                <ul>
                  <li>پشتیبانی</li>
                  <li>پیشنهاذات</li>
                  <li> درخواست بازی</li>
                  <li> سیستم</li>
                </ul>
              </div>*/}
              <div className="col-start-1 col-end-3 row-start-2  flex items-end justify-self-end pb-2">
                <div>
                  <div className="flex ">
                    <div >989216795326+</div>
                    <div className="pr-2 min-w-[25px] ">
                      <Image
                        src="/footerImages/phoneB.png"
                        height={18}
                        width={25}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-start-1 row-start-2 flex items-end pb-2 fourthPhase:hidden">
                تلفن تماس:
              </div>

              <div className="col-span-2 row-start-3  flex justify-self-end ">
                <div>
                  <div className="flex ">
                    <div>loremipsum@gmail.com</div>
                    <div className="pr-2 min-w-[25px] ">
                      <Image
                        src="/footerImages/mail.png"
                        height={18}
                        width={25}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-start-1 row-start-3 flex fourthPhase:hidden">ایمیل:</div>

              <div className="col-start-1 row-start-4 flex">
                ما را در شبکه های اجتماعی دنبال کنید
              </div>
              <div className=" col-start-2 row-start-4 flex justify-end ">
                <div>
                  <Image
                    src="/footerImages/telegram.png"
                    width={50}
                    height={40}
                  />
                </div>

                <div>
                  <Image
                    src="/footerImages/WhatsApp3.png"
                    width={50}
                    height={40}
                  />
                </div>

                <div>
                  <Image
                    src="/footerImages/instagram.png"
                    width={50}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" basis-1/2" style={{ direction: "rtl" }}>
            <div className="mr-3 ml-6 h-[85%] bg-mainBgColor">
              <h1 className="flex items-center justify-center">
                Sasan Company
              </h1>
              <div className="flex flex-col items-center justify-center text-center">
                <p>We Are a gameing company build in 1999</p>
                <p>
                  after years of working hard we proudly peresent u this shit
                </p>
                <p>u can rly try us dont worry</p>
                <p> we wont scam u buy games and enjoy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
