const booksData = [
  { id: "b1", title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", cat: "business", catLabel: "Business", price: 89000, priceOld: 130000, affiliate: "https://shp.ee/ex1", cover: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg", desc: "<b>Chủ đạo:</b> Sự khác biệt trong tư duy về tiền bạc giữa người giàu và người nghèo. Dạy cách bắt tiền làm việc cho mình thay vì làm việc vì tiền.<br><br><b>Câu Key:</b> <i>'Người nghèo và tầng lớp trung lưu làm việc vì tiền bạc. Người giàu buộc tiền bạc làm việc cho mình.'</i>", sold: 12400, rating: 4.9 },
  { id: "b2", title: "Atomic Habits", author: "James Clear", cat: "self-help", catLabel: "Self-help", price: 108000, priceOld: 155000, affiliate: "https://shp.ee/ex2", cover: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg", desc: "<b>Chủ đạo:</b> Cách xây dựng thói quen tốt và loại bỏ thói quen xấu thông qua những thay đổi nhỏ bé (nguyên tử) nhưng mang lại kết quả khổng lồ.<br><br><b>Câu Key:</b> <i>'Bạn không vươn tới mức độ của mục tiêu mà bạn đặt ra. Bạn rơi xuống mức độ của hệ thống mà bạn xây dựng.'</i>", sold: 34200, rating: 5.0 },
  { id: "b3", title: "The Alchemist", author: "Paulo Coelho", cat: "literature", catLabel: "Literature", price: 79000, priceOld: 110000, affiliate: "https://shp.ee/ex3", cover: "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg", desc: "<b>Chủ đạo:</b> Hành trình đi tìm kho báu của cậu bé chăn cừu Santiago, qua đó gửi gắm triết lý về việc theo đuổi ước mơ đời mình.<br><br><b>Câu Key:</b> <i>'Khi bạn thực sự mong muốn một điều gì đó, cả vũ trụ sẽ hợp sức lại giúp bạn đạt được nó.'</i>", sold: 8900, rating: 4.8 },
  { id: "b4", title: "How to Win Friends", author: "Dale Carnegie", cat: "self-help", catLabel: "Self-help", price: 85000, priceOld: 120000, affiliate: "https://shp.ee/ex4", cover: "https://covers.openlibrary.org/b/isbn/9780671027032-L.jpg", desc: "<b>Chủ đạo:</b> Nghệ thuật thu phục nhân tâm, cách giao tiếp khéo léo để gây thiện cảm và tạo dựng mối quan hệ tốt đẹp với mọi người.<br><br><b>Câu Key:</b> <i>'Bạn có thể kết bạn được nhiều hơn trong hai tháng bằng cách thực sự quan tâm đến người khác, thay vì mất hai năm để cố gắng làm người khác quan tâm đến mình.'</i>", sold: 21500, rating: 4.9 },
  { id: "b5", title: "Deep Work", author: "Cal Newport", cat: "skills", catLabel: "Skills", price: 99000, priceOld: 140000, affiliate: "https://shp.ee/ex5", cover: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg", desc: "<b>Chủ đạo:</b> Tầm quan trọng của sự tập trung cao độ (Làm việc sâu) trong thời đại đầy rẫy sự phân tâm, và cách rèn luyện khả năng này.<br><br><b>Câu Key:</b> <i>'Khả năng tập trung cao độ là siêu năng lực của thế kỷ 21.'</i>", sold: 5600, rating: 4.7 },
  { id: "b6", title: "Zero to One", author: "Peter Thiel", cat: "business", catLabel: "Business", price: 95000, priceOld: 140000, affiliate: "https://shp.ee/ex7", cover: "https://covers.openlibrary.org/b/isbn/9780804139298-L.jpg", desc: "<b>Chủ đạo:</b> Bí quyết xây dựng startup đột phá bằng cách tạo ra những điều mới mẻ hoàn toàn (từ 0 đến 1), thay vì chỉ sao chép (từ 1 đến n).<br><br><b>Câu Key:</b> <i>'Sự độc quyền là điều kiện của mọi doanh nghiệp thành công.'</i>", sold: 14200, rating: 4.8 },
  { id: "b7", title: "The Power of Now", author: "Eckhart Tolle", cat: "self-help", catLabel: "Self-help", price: 88000, priceOld: 125000, affiliate: "https://shp.ee/ex9", cover: "https://covers.openlibrary.org/b/isbn/9781577314806-L.jpg", desc: "<b>Chủ đạo:</b> Giải thoát tâm trí khỏi quá khứ và tương lai để tìm thấy sự bình an nội tại và sức mạnh thực sự ngay trong giây phút hiện tại.<br><br><b>Câu Key:</b> <i>'Hãy nhận ra sâu sắc rằng hiện tại là tất cả những gì bạn có. Hãy lấy 'Bây giờ' làm trọng tâm chính của cuộc đời bạn.'</i>", sold: 9300, rating: 4.7 },
  { id: "b8", title: "1984", author: "George Orwell", cat: "literature", catLabel: "Literature", price: 72000, priceOld: 100000, affiliate: "https://shp.ee/ex10", cover: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg", desc: "<b>Chủ đạo:</b> Viễn cảnh đen tối về một xã hội bị kiểm soát và thao túng hoàn toàn bởi chính quyền toàn trị.<br><br><b>Câu Key:</b> <i>'Big Brother đang theo dõi bạn.'</i>", sold: 18500, rating: 5.0 },
  { id: "b9", title: "The Lean Startup", author: "Eric Ries", cat: "business", catLabel: "Business", price: 90000, priceOld: 130000, affiliate: "https://shp.ee/ex11", cover: "https://covers.openlibrary.org/b/isbn/9780307887894-L.jpg", desc: "<b>Chủ đạo:</b> Phương pháp khởi nghiệp tinh gọn: Xây dựng - Đo lường - Học hỏi để giảm thiểu rủi ro và tăng tốc độ phát triển sản phẩm.<br><br><b>Câu Key:</b> <i>'Bài học quan trọng nhất của khởi nghiệp là học được cách khách hàng thực sự phản ứng với sản phẩm.'</i>", sold: 11200, rating: 4.6 },
  { id: "b10", title: "Mindset", author: "Carol S. Dweck", cat: "self-help", catLabel: "Self-help", price: 82000, priceOld: 115000, affiliate: "https://shp.ee/ex12", cover: "https://covers.openlibrary.org/b/isbn/9780345472328-L.jpg", desc: "<b>Chủ đạo:</b> Sức mạnh của Tư duy phát triển (Growth Mindset) so với Tư duy cố định (Fixed Mindset) trong việc quyết định thành công của đời người.<br><br><b>Câu Key:</b> <i>'Trí thông minh và tài năng có thể được phát triển thông qua nỗ lực và học hỏi.'</i>", sold: 7800, rating: 4.8 },
  { id: "b11", title: "Brave New World", author: "Aldous Huxley", cat: "literature", catLabel: "Literature", price: 75000, priceOld: 105000, affiliate: "https://shp.ee/ex13", cover: "https://covers.openlibrary.org/b/isbn/9780060850524-L.jpg", desc: "<b>Chủ đạo:</b> Lời cảnh tỉnh về một thế giới công nghệ thống trị, nơi con người bị tước đoạt tự do và nhân tính để đổi lấy sự thỏa mãn bề ngoài.<br><br><b>Câu Key:</b> <i>'Con người ta thường muốn tự đánh lừa bản thân hơn là đối diện với sự thật phũ phàng.'</i>", sold: 6400, rating: 4.7 },
  { id: "b12", title: "Never Eat Alone", author: "Keith Ferrazzi", cat: "skills", catLabel: "Skills", price: 88000, priceOld: 120000, affiliate: "https://shp.ee/ex14", cover: "https://covers.openlibrary.org/b/isbn/9780385512053-L.jpg", desc: "<b>Chủ đạo:</b> Bí quyết xây dựng mạng lưới quan hệ chất lượng, chân thành và cùng có lợi để vươn tới thành công.<br><br><b>Câu Key:</b> <i>'Thành công của bạn không được đo bằng những gì bạn biết, mà bằng những người bạn biết.'</i>", sold: 4200, rating: 4.6 },
  { id: "b13", title: "Think and Grow Rich", author: "Napoleon Hill", cat: "business", catLabel: "Business", price: 76000, priceOld: 110000, affiliate: "https://shp.ee/ex15", cover: "https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg", desc: "<b>Chủ đạo:</b> 13 nguyên tắc nghĩ giàu và làm giàu được đúc kết từ việc nghiên cứu hơn 500 người thành công nhất nước Mỹ.<br><br><b>Câu Key:</b> <i>'Bất cứ điều gì tâm trí con người có thể hình dung và tin tưởng, nó đều có thể đạt được.'</i>", sold: 23000, rating: 4.9 },
  { id: "b14", title: "Thinking, Fast and Slow", author: "Daniel Kahneman", cat: "skills", catLabel: "Skills", price: 115000, priceOld: 160000, affiliate: "https://shp.ee/ex16", cover: "https://covers.openlibrary.org/b/isbn/9780374275631-L.jpg", desc: "<b>Chủ đạo:</b> Phân tích hai hệ thống tư duy của con người (Nhanh & Chậm) và cách chúng ảnh hưởng đến mọi quyết định của chúng ta.<br><br><b>Câu Key:</b> <i>'Trực giác chẳng qua là sự nhận diện. Chứ không có phép màu nào ở đây cả.'</i>", sold: 15400, rating: 4.8 },
  { id: "b15", title: "The Great Gatsby", author: "F. Scott Fitzgerald", cat: "literature", catLabel: "Literature", price: 65000, priceOld: 90000, affiliate: "https://shp.ee/ex17", cover: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg", desc: "<b>Chủ đạo:</b> Bức tranh chân thực về Giấc mơ Mỹ phồn hoa nhưng sụp đổ, về tình yêu mù quáng và bi kịch của những ảo mộng.<br><br><b>Câu Key:</b> <i>'Vì vậy chúng ta đập nhịp bước tới, như những con thuyền ngược dòng, không ngừng bị đẩy lùi về quá khứ.'</i>", sold: 42000, rating: 4.7 },
  { id: "b16", title: "Outliers", author: "Malcolm Gladwell", cat: "self-help", catLabel: "Self-help", price: 92000, priceOld: 135000, affiliate: "https://shp.ee/ex18", cover: "https://covers.openlibrary.org/b/isbn/9780316017923-L.jpg", desc: "<b>Chủ đạo:</b> Khám phá những yếu tố ẩn giấu đằng sau thành công xuất chúng (Kẻ xuất chúng), bao gồm hoàn cảnh, thời điểm và quy tắc 10.000 giờ.<br><br><b>Câu Key:</b> <i>'Không ai thành công một mình. Mọi thành công đều có dấu ấn của xã hội và cơ hội.'</i>", sold: 18200, rating: 4.8 },
  { id: "b17", title: "Good to Great", author: "Jim Collins", cat: "business", catLabel: "Business", price: 105000, priceOld: 150000, affiliate: "https://shp.ee/ex19", cover: "https://covers.openlibrary.org/b/isbn/9780066620992-L.jpg", desc: "<b>Chủ đạo:</b> Nghiên cứu về những công ty có bước nhảy vọt từ mức Tốt lên Vĩ đại, và các nguyên tắc lãnh đạo cốt lõi làm nên điều đó.<br><br><b>Câu Key:</b> <i>'Tốt là kẻ thù của Vĩ đại.'</i>", sold: 11100, rating: 4.9 },
  { id: "b18", title: "Essentialism", author: "Greg McKeown", cat: "skills", catLabel: "Skills", price: 89000, priceOld: 125000, affiliate: "https://shp.ee/ex20", cover: "https://covers.openlibrary.org/b/isbn/9780804137386-L.jpg", desc: "<b>Chủ đạo:</b> Triết lý Chủ nghĩa tinh yếu: Cách tập trung vào những điều thực sự quan trọng và can đảm nói Không với phần còn lại.<br><br><b>Câu Key:</b> <i>'Nếu bạn không tự sắp xếp cuộc sống của mình, người khác sẽ làm điều đó thay bạn.'</i>", sold: 9800, rating: 4.7 },
  { id: "b19", title: "Pride and Prejudice", author: "Jane Austen", cat: "literature", catLabel: "Literature", price: 55000, priceOld: 80000, affiliate: "https://shp.ee/ex21", cover: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg", desc: "<b>Chủ đạo:</b> Cấu trúc xã hội, hôn nhân và sự vượt qua những định kiến, kiêu hãnh cá nhân để tìm thấy tình yêu đích thực.<br><br><b>Câu Key:</b> <i>'Sự kiêu hãnh liên quan đến ý nghĩ của chúng ta về bản thân; còn định kiến là điều ta nghĩ người khác thấy ở mình.'</i>", sold: 31000, rating: 4.8 },
  { id: "b20", title: "Shoe Dog", author: "Phil Knight", cat: "business", catLabel: "Business", price: 110000, priceOld: 160000, affiliate: "https://shp.ee/ex22", cover: "https://covers.openlibrary.org/b/isbn/9781501135910-L.jpg", desc: "<b>Chủ đạo:</b> Hồi ký chân thực và truyền cảm hứng của nhà sáng lập Nike về hành trình gian nan xây dựng đế chế giày thể thao số 1 thế giới.<br><br><b>Câu Key:</b> <i>'Đừng bao giờ dừng lại. Ngay cả khi bạn nghĩ đến việc dừng lại, hãy cứ tiếp tục chạy.'</i>", sold: 14500, rating: 4.9 },
  { id: "b21", title: "Grit", author: "Angela Duckworth", cat: "self-help", catLabel: "Self-help", price: 95000, priceOld: 140000, affiliate: "https://shp.ee/ex23", cover: "https://covers.openlibrary.org/b/isbn/9781501111105-L.jpg", desc: "<b>Chủ đạo:</b> Sức mạnh của đam mê và lòng kiên trì (Grit) vượt qua cả tài năng thiên bẩm trong việc đạt được thành tựu xuất sắc.<br><br><b>Câu Key:</b> <i>'Tài năng mà không nỗ lực thì chỉ là tiềm năng chưa được khai phá. Nỗ lực biến tài năng thành kỹ năng.'</i>", sold: 12300, rating: 4.8 },
  { id: "b22", title: "To Kill a Mockingbird", author: "Harper Lee", cat: "literature", catLabel: "Literature", price: 68000, priceOld: 95000, affiliate: "https://shp.ee/ex24", cover: "https://covers.openlibrary.org/b/isbn/9780060935467-L.jpg", desc: "<b>Chủ đạo:</b> Bài học sâu sắc về sự đồng cảm, lòng bao dung và sự dũng cảm đứng lên chống lại định kiến xã hội.<br><br><b>Câu Key:</b> <i>'Con sẽ không bao giờ hiểu thực sự một người cho đến khi con chui vào bên trong da thịt của họ và đi dạo trong đó.'</i>", sold: 28000, rating: 5.0 },
  { id: "b23", title: "Steal Like an Artist", author: "Austin Kleon", cat: "skills", catLabel: "Skills", price: 72000, priceOld: 100000, affiliate: "https://shp.ee/ex25", cover: "https://covers.openlibrary.org/b/isbn/9780761169253-L.jpg", desc: "<b>Chủ đạo:</b> Góc nhìn mới mẻ về sáng tạo: Không có gì là nguyên bản hoàn toàn, sáng tạo là biết cách 'đánh cắp' và biến tấu hợp lý.<br><br><b>Câu Key:</b> <i>'Đừng chờ đợi cho đến khi biết mình là ai rồi mới bắt đầu sáng tạo.'</i>", sold: 16700, rating: 4.7 },
  { id: "b24", title: "The 4-Hour Workweek", author: "Timothy Ferriss", cat: "business", catLabel: "Business", price: 98000, priceOld: 145000, affiliate: "https://shp.ee/ex26", cover: "https://covers.openlibrary.org/b/isbn/9780307465351-L.jpg", desc: "<b>Chủ đạo:</b> Thiết kế phong cách sống mới: Thoát khỏi vòng xoáy làm việc 9-đến-5, tự động hóa thu nhập và tận hưởng tự do ngay từ bây giờ.<br><br><b>Câu Key:</b> <i>'Ngày mai trở thành không bao giờ. Bạn chỉ sống một lần, hãy sống sao cho đáng.'</i>", sold: 21000, rating: 4.6 }
];

// Helper to format currency
function formatVND(amount) {
  return '₫' + amount.toLocaleString('vi-VN');
}

/* ─── GLOBAL CURSOR LOGIC ─── */
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    // Inject Cursor HTML
    if (!document.getElementById('cur')) {
      const cur = document.createElement('div');
      cur.id = 'cur';
      document.body.appendChild(cur);
      const ring = document.createElement('div');
      ring.id = 'cur-ring';
      document.body.appendChild(ring);
    }
    
    // Animate Cursor
    const cur = document.getElementById('cur');
    const curRing = document.getElementById('cur-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    (function raf() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if(cur) { cur.style.left = mx + 'px'; cur.style.top = my + 'px'; }
      if(curRing) { curRing.style.left = rx + 'px'; curRing.style.top = ry + 'px'; }
      requestAnimationFrame(raf);
    })();
    
    // Hover Effects
    const attachHover = () => {
      document.querySelectorAll('a, button, .bk, .fb, .cat-c, .fbtn, .sort-btn, .btn-cart, .btn-buy').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('c-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('c-hover'));
      });
      document.querySelectorAll('p, li, h1, h2, h3').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('c-text'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('c-text'));
      });
    };
    attachHover();
    // In case DOM updates dynamically, observe or just let standard clicks handle it.
  });
}
