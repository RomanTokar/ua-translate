import './App.css';
import bookImage from './assets/book.png';
import bookIcon from './assets/bookIcon.svg';
import bookmarkIcon from './assets/bookmarkIcon.svg';

const BreadCrumbs = () => {
  return <p className={'breadcrumbs'}>{['Головна', 'Головна'].map((item, i) => (
    <>
      {i !== 0 && <span> > </span>}
      <span>{item}</span>
    </>
  ))}</p>;
};

function App() {
  return (
    <>
      <BreadCrumbs/>
      <h2 className={'title'}>Пригода Шерлока Холмса</h2>
      <div className={'container'}>
        <img src={bookImage} alt="book"/>
        <div>
          <table>
            <tbody>
            <tr>
              <th scope={'row'}>Автор</th>
              <td>Артур Конан Дойл</td>
            </tr>
            <tr>
              <th scope={'row'}>Перекладач</th>
              <td>Перекладач</td>
            </tr>
            <tr>
              <th scope={'row'}>Розділів</th>
              <td>16</td>
            </tr>
            <tr>
              <th scope={'row'}>Жанр</th>
              <td>Детектив</td>
            </tr>
            <tr>
              <th scope={'row'}>Теги</th>
              <td>
                <div className={'tags-container'}>{[
                  'переклад',
                  'гарри поттер',
                  'переклад'].map(
                  (item) => (
                    <div className={'tag'}>{`# ${item}`}</div>
                  ))}</div>
              </td>
            </tr>
            <tr>
              <th scope={'row'}>Фендом</th>
              <td>Фендом</td>
            </tr>
            </tbody>
          </table>
          <div className={'actions'}>
            <button><img src={bookIcon} alt="book icon"/><span>Читати</span></button>
            <button><img src={bookmarkIcon} alt="bookmark icon"/><span>До закладок</span></button>
          </div>
        </div>
        <div>
          <div style={{
            background: '#282D3B',
            borderRadius: 5,
            display: 'flex',
            alignItems: 'center',
            padding: '5px 18px',
            gap: 10,
            marginBottom: 54
          }}>
            <div style={{
              color: '#FDED01', fontWeight: 600,
              fontSize: 44
            }}>10
            </div>
            <div style={{color: 'white'}}>UAcoins</div>
          </div>
          <div style={{marginBottom: 45}}><h4 className={'sub-title'}>Рейтинг твору</h4>
            <StarRating rating={4}/>
          </div>
          <div><h4 className={'sub-title'}>Якість перекладу</h4>
            <StarRating rating={4}/>
          </div>
        </div>
      </div>
    </>
  );
}

const StarRating = ({rating}) => {
  rating = rating < 0 ? 0 : rating > 5 ? 5 : rating;

  return (<div style={{display: 'flex', gap: 14}}>{new Array(5).fill(0)
      .map((_, i) => i + 1 <= rating ? <StarFilled/> : <StarOutlined/>)}</div>
  );
};

const StarFilled = () => {
  return (<span style={{color: 'yellow'}}>&#9733;</span>);
};

const StarOutlined = () => {
  return (<span style={{color: 'yellow'}}>&#9734;</span>);
};

export default App;
