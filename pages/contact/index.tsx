const Contacts = () => {
  return (
    <>
      <div className="mr-10 text-right">
        <div>
          با سلام شرکن نمیدونک اماده خدمت رسانی به تمامی دوستان عزیز است ولی نمی
          دونم الان دارم درباره چی حرف می زنم
          <div>
            راه ای بر قراری ارتباط با شرکت از مسیر های ریز در دست رست است
          </div>
          <div>ایمیل:</div>
          <div>تلفن:</div>
          <div>واتساپ:</div>
          <div>یا می تونید با پر کردن فرم زیر با ما در ارتباط باشید</div>
        </div>
      </div>
      <form className="flex justify-center justify-items-center  ">
        <div className="flex-col">
          <div className="w-32 ">
            <div>Name:</div>
            <input placeholder={"fuck u"} />
            <div>Explain:</div>
            <textarea />
          </div>
          <div className="space-x-12">
            <button>something</button>
            <button>something</button>
          </div>
        </div>
      </form>
    </>
  );
};
export default Contacts;
