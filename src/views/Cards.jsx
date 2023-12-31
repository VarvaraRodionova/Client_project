const React = require('react');
const Layout = require('./Layout');

module.exports = function Cards({
  login, category, cards, nonLearnedCards,
}) {
  return (
    <Layout login={login}>
      <link href="https://unpkg.com/css.gg@2.0.0/icons/css/check-o.css" rel="stylesheet" crossOrigin="anonymous" />
      <link rel="stylesheet" href="/css/cards.css" />
      <script defer src="/js/cards.js" />
      <script defer src="/js/deleteCard.js" />
      <script defer src="/js/reset.js" />
      <h1 className="cards-title">
        Вы изучаете -
        {' '}
        <span>{category.name}</span>
      </h1>
      <div className="cards-container section-center blog-center deleteDiv">
        {nonLearnedCards.length === 0 ? (
          <>
            <h3>Все карточки изучены</h3>
            <button className="resetBtn btn btn-outline-secondary" type="button" id={category.id}>Изучать снова</button>
          </>
        ) : (
          nonLearnedCards.map((card) => (
            <div className="card-body scene scene--card" key={card.id}>
              <div className="card">
                {card.Progresses.length > 0 ? (
                  !card.Progresses[0].dataValues.isLearned ? (
                    <>
                      <div className="card__face card__face--front">
                        <div className="card-info">
                          <h2 className="card-title">{card.question}</h2>
                          {/* <div className="checkmark-container"><i className="gg-check-o" /></div> */}
                        </div>
                      </div>
                      <div className="card__face card__face--back">
                        <h2 className="card-title">{card.answer}</h2>
                        {login === 'admin' ? (
                          <button type="button" className="btn btn-learned btn-success btn-delete" id={card.id} data-cardid={card.id}>Удалить</button>
                        ) : (
                          <button type="button" className="btn btn-learned btn-success " id={card.id} data-cardid={card.id}>Изучено</button>
                        )}
                      </div>
                    </>
                  ) : (null)
                ) : (
                  <>
                    <div className="card__face card__face--front">
                      <div className="card-info">
                        <h2 className="card-title">{card.question}</h2>
                        <div className="checkmark-container" />
                      </div>
                    </div>

                    <div className="card__face card__face--back">
                      <h2 className="card-title">{card.answer}</h2>
                      {login === 'admin' ? (
                        <button type="button" className="btn btn-learned btn-success btn-delete" id={card.id} data-cardid={card.id}>Удалить</button>
                      ) : (
                        <button type="button" className="btn btn-learned btn-success " id={card.id} data-cardid={card.id}>Изучено</button>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </Layout>
  );
};
