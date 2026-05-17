const booksData = [
  { 
    id: "b1", title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", cat: "business", catLabel: "Business", price: 89000, priceOld: 130000, affiliate: "https://shp.ee/ex1", cover: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg", 
    desc: "<b>Main Theme:</b> The difference in mindset about money between the rich and the poor. Teaches how to make money work for you instead of working for money.<br><br><b>Key Quote:</b> <i>'The poor and the middle-class work for money. The rich have money work for them.'</i>", 
    sold: 12400, rating: 4.9 
  },
  { 
    id: "b2", title: "Atomic Habits", author: "James Clear", cat: "self-help", catLabel: "Self-help", price: 108000, priceOld: 155000, affiliate: "https://shp.ee/ex2", cover: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg", 
    desc: "<b>Main Theme:</b> How to build good habits and break bad ones through tiny (atomic) changes that yield massive results.<br><br><b>Key Quote:</b> <i>'You do not rise to the level of your goals. You fall to the level of your systems.'</i>", 
    sold: 34200, rating: 5.0 
  },
  { 
    id: "b3", title: "The Alchemist", author: "Paulo Coelho", cat: "literature", catLabel: "Literature", price: 79000, priceOld: 110000, affiliate: "https://shp.ee/ex3", cover: "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg", 
    desc: "<b>Main Theme:</b> The journey of the shepherd boy Santiago to find treasure, conveying the philosophy of pursuing one's personal legend.<br><br><b>Key Quote:</b> <i>'And, when you want something, all the universe conspires in helping you to achieve it.'</i>", 
    sold: 8900, rating: 4.8 
  },
  { 
    id: "b4", title: "How to Win Friends", author: "Dale Carnegie", cat: "self-help", catLabel: "Self-help", price: 85000, priceOld: 120000, affiliate: "https://shp.ee/ex4", cover: "https://covers.openlibrary.org/b/isbn/9780671027032-L.jpg", 
    desc: "<b>Main Theme:</b> The art of winning people over, how to communicate tactfully to create sympathy and build good relationships.<br><br><b>Key Quote:</b> <i>'You can make more friends in two months by becoming interested in other people than you can in two years by trying to get other people interested in you.'</i>", 
    sold: 21500, rating: 4.9 
  },
  { 
    id: "b5", title: "Deep Work", author: "Cal Newport", cat: "skills", catLabel: "Skills", price: 99000, priceOld: 140000, affiliate: "https://shp.ee/ex5", cover: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg", 
    desc: "<b>Main Theme:</b> The importance of deep concentration (Deep Work) in an age of distraction, and how to cultivate this ability.<br><br><b>Key Quote:</b> <i>'The ability to focus deeply is the superpower of the 21st century.'</i>", 
    sold: 5600, rating: 4.7 
  },
  { 
    id: "b6", title: "Zero to One", author: "Peter Thiel", cat: "business", catLabel: "Business", price: 95000, priceOld: 140000, affiliate: "https://shp.ee/ex7", cover: "https://covers.openlibrary.org/b/isbn/9780804139298-L.jpg", 
    desc: "<b>Main Theme:</b> The secret to building breakthrough startups by creating something entirely new (going from 0 to 1), rather than just copying (going from 1 to n).<br><br><b>Key Quote:</b> <i>'Monopoly is the condition of every successful business.'</i>", 
    sold: 14200, rating: 4.8 
  },
  { 
    id: "b7", title: "The Power of Now", author: "Eckhart Tolle", cat: "self-help", catLabel: "Self-help", price: 88000, priceOld: 125000, affiliate: "https://shp.ee/ex9", cover: "https://covers.openlibrary.org/b/isbn/9781577314806-L.jpg", 
    desc: "<b>Main Theme:</b> Freeing the mind from the past and future to find inner peace and true power in the present moment.<br><br><b>Key Quote:</b> <i>'Realize deeply that the present moment is all you have. Make the NOW the primary focus of your life.'</i>", 
    sold: 9300, rating: 4.7 
  },
  { 
    id: "b8", title: "1984", author: "George Orwell", cat: "literature", catLabel: "Literature", price: 72000, priceOld: 100000, affiliate: "https://shp.ee/ex10", cover: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg", 
    desc: "<b>Main Theme:</b> A dark vision of a society completely controlled and manipulated by a totalitarian regime.<br><br><b>Key Quote:</b> <i>'Big Brother is watching you.'</i>", 
    sold: 18500, rating: 5.0 
  },
  { 
    id: "b9", title: "The Lean Startup", author: "Eric Ries", cat: "business", catLabel: "Business", price: 90000, priceOld: 130000, affiliate: "https://shp.ee/ex11", cover: "https://covers.openlibrary.org/b/isbn/9780307887894-L.jpg", 
    desc: "<b>Main Theme:</b> The lean startup methodology: Build - Measure - Learn to minimize risk and accelerate product development.<br><br><b>Key Quote:</b> <i>'The most important lesson of a startup is learning how customers actually respond to the product.'</i>", 
    sold: 11200, rating: 4.6 
  },
  { 
    id: "b10", title: "Mindset", author: "Carol S. Dweck", cat: "self-help", catLabel: "Self-help", price: 82000, priceOld: 115000, affiliate: "https://shp.ee/ex12", cover: "https://covers.openlibrary.org/b/isbn/9780345472328-L.jpg", 
    desc: "<b>Main Theme:</b> The power of a Growth Mindset compared to a Fixed Mindset in determining one's success in life.<br><br><b>Key Quote:</b> <i>'Intelligence and talent can be developed through effort and learning.'</i>", 
    sold: 7800, rating: 4.8 
  },
  { 
    id: "b11", title: "Brave New World", author: "Aldous Huxley", cat: "literature", catLabel: "Literature", price: 75000, priceOld: 105000, affiliate: "https://shp.ee/ex13", cover: "https://covers.openlibrary.org/b/isbn/9780060850524-L.jpg", 
    desc: "<b>Main Theme:</b> A warning about a technology-dominated world where humans are stripped of freedom and humanity in exchange for superficial satisfaction.<br><br><b>Key Quote:</b> <i>'People prefer to deceive themselves rather than face the harsh truth.'</i>", 
    sold: 6400, rating: 4.7 
  },
  { 
    id: "b12", title: "Never Eat Alone", author: "Keith Ferrazzi", cat: "skills", catLabel: "Skills", price: 88000, priceOld: 120000, affiliate: "https://shp.ee/ex14", cover: "https://covers.openlibrary.org/b/isbn/9780385512053-L.jpg", 
    desc: "<b>Main Theme:</b> The secret to building a high-quality, sincere, and mutually beneficial network of relationships to achieve success.<br><br><b>Key Quote:</b> <i>'Your success is not measured by what you know, but by who you know.'</i>", 
    sold: 4200, rating: 4.6 
  },
  { 
    id: "b13", title: "Think and Grow Rich", author: "Napoleon Hill", cat: "business", catLabel: "Business", price: 76000, priceOld: 110000, affiliate: "https://shp.ee/ex15", cover: "https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg", 
    desc: "<b>Main Theme:</b> 13 principles of thinking and growing rich, drawn from studying over 500 of the most successful people in America.<br><br><b>Key Quote:</b> <i>'Whatever the mind of man can conceive and believe, it can achieve.'</i>", 
    sold: 23000, rating: 4.9 
  },
  { 
    id: "b14", title: "Thinking, Fast and Slow", author: "Daniel Kahneman", cat: "skills", catLabel: "Skills", price: 115000, priceOld: 160000, affiliate: "https://shp.ee/ex16", cover: "https://covers.openlibrary.org/b/isbn/9780374275631-L.jpg", 
    desc: "<b>Main Theme:</b> An analysis of the two systems of human thinking (Fast & Slow) and how they influence all our decisions.<br><br><b>Key Quote:</b> <i>'Intuition is nothing more and nothing less than recognition.'</i>", 
    sold: 15400, rating: 4.8 
  },
  { 
    id: "b15", title: "The Great Gatsby", author: "F. Scott Fitzgerald", cat: "literature", catLabel: "Literature", price: 65000, priceOld: 90000, affiliate: "https://shp.ee/ex17", cover: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg", 
    desc: "<b>Main Theme:</b> A realistic portrait of the glamorous but doomed American Dream, blind love, and the tragedy of illusions.<br><br><b>Key Quote:</b> <i>'So we beat on, boats against the current, borne back ceaselessly into the past.'</i>", 
    sold: 42000, rating: 4.7 
  },
  { 
    id: "b16", title: "Outliers", author: "Malcolm Gladwell", cat: "self-help", catLabel: "Self-help", price: 92000, priceOld: 135000, affiliate: "https://shp.ee/ex18", cover: "https://covers.openlibrary.org/b/isbn/9780316017923-L.jpg", 
    desc: "<b>Main Theme:</b> Exploring the hidden factors behind extraordinary success (Outliers), including circumstances, timing, and the 10,000-hour rule.<br><br><b>Key Quote:</b> <i>'No one makes it alone. Every success has the imprint of society and opportunity.'</i>", 
    sold: 18200, rating: 4.8 
  },
  { 
    id: "b17", title: "Good to Great", author: "Jim Collins", cat: "business", catLabel: "Business", price: 105000, priceOld: 150000, affiliate: "https://shp.ee/ex19", cover: "https://covers.openlibrary.org/b/isbn/9780066620992-L.jpg", 
    desc: "<b>Main Theme:</b> A study of companies that made the leap from Good to Great, and the core leadership principles that made it happen.<br><br><b>Key Quote:</b> <i>'Good is the enemy of great.'</i>", 
    sold: 11100, rating: 4.9 
  },
  { 
    id: "b18", title: "Essentialism", author: "Greg McKeown", cat: "skills", catLabel: "Skills", price: 89000, priceOld: 125000, affiliate: "https://shp.ee/ex20", cover: "https://covers.openlibrary.org/b/isbn/9780804137386-L.jpg", 
    desc: "<b>Main Theme:</b> The philosophy of Essentialism: How to focus on what truly matters and have the courage to say No to the rest.<br><br><b>Key Quote:</b> <i>'If you don't prioritize your life, someone else will.'</i>", 
    sold: 9800, rating: 4.7 
  },
  { 
    id: "b19", title: "Pride and Prejudice", author: "Jane Austen", cat: "literature", catLabel: "Literature", price: 55000, priceOld: 80000, affiliate: "https://shp.ee/ex21", cover: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg", 
    desc: "<b>Main Theme:</b> Social structure, marriage, and overcoming personal prejudice and pride to find true love.<br><br><b>Key Quote:</b> <i>'Pride relates to what we think of ourselves; prejudice is what we think others see in us.'</i>", 
    sold: 31000, rating: 4.8 
  },
  { 
    id: "b20", title: "Shoe Dog", author: "Phil Knight", cat: "business", catLabel: "Business", price: 110000, priceOld: 160000, affiliate: "https://shp.ee/ex22", cover: "https://covers.openlibrary.org/b/isbn/9781501135910-L.jpg", 
    desc: "<b>Main Theme:</b> The honest and inspiring memoir of Nike's founder about the arduous journey of building the world's #1 sports shoe empire.<br><br><b>Key Quote:</b> <i>'Never stop. Even when you think about stopping, just keep running.'</i>", 
    sold: 14500, rating: 4.9 
  },
  { 
    id: "b21", title: "Grit", author: "Angela Duckworth", cat: "self-help", catLabel: "Self-help", price: 95000, priceOld: 140000, affiliate: "https://shp.ee/ex23", cover: "https://covers.openlibrary.org/b/isbn/9781501111105-L.jpg", 
    desc: "<b>Main Theme:</b> The power of passion and perseverance (Grit) surpassing even natural talent in achieving outstanding success.<br><br><b>Key Quote:</b> <i>'Talent without effort is just untapped potential. Effort turns talent into skill.'</i>", 
    sold: 12300, rating: 4.8 
  },
  { 
    id: "b22", title: "To Kill a Mockingbird", author: "Harper Lee", cat: "literature", catLabel: "Literature", price: 68000, priceOld: 95000, affiliate: "https://shp.ee/ex24", cover: "https://covers.openlibrary.org/b/isbn/9780060935467-L.jpg", 
    desc: "<b>Main Theme:</b> A profound lesson on empathy, tolerance, and the courage to stand up against social prejudice.<br><br><b>Key Quote:</b> <i>'You never really understand a person until you consider things from his point of view... until you climb into his skin and walk around in it.'</i>", 
    sold: 28000, rating: 5.0 
  },
  { 
    id: "b23", title: "Steal Like an Artist", author: "Austin Kleon", cat: "skills", catLabel: "Skills", price: 72000, priceOld: 100000, affiliate: "https://shp.ee/ex25", cover: "https://covers.openlibrary.org/b/isbn/9780761169253-L.jpg", 
    desc: "<b>Main Theme:</b> A fresh perspective on creativity: Nothing is completely original, creativity is knowing how to \"steal\" and remix appropriately.<br><br><b>Key Quote:</b> <i>'Don't wait until you know who you are to get started.'</i>", 
    sold: 16700, rating: 4.7 
  },
  { 
    id: "b24", title: "The 4-Hour Workweek", author: "Timothy Ferriss", cat: "business", catLabel: "Business", price: 98000, priceOld: 145000, affiliate: "https://shp.ee/ex26", cover: "https://covers.openlibrary.org/b/isbn/9780307465351-L.jpg", 
    desc: "<b>Main Theme:</b> Designing a new lifestyle: Escaping the 9-to-5 grind, automating income, and enjoying freedom right now.<br><br><b>Key Quote:</b> <i>'Tomorrow becomes never. You only live once, so make it count.'</i>", 
    sold: 21000, rating: 4.6 
  }
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
