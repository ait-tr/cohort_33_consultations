import './App.css';
import ProfileCard from './components/ProfileCard';
const users = [
  {
    src: 'https://informburo.kz/storage/photos/139/main/2RBAU7TBVAXzCElrUzj5Wa7CFm1GcE8i4W8NkyOq.jpg',
    name: 'Ivan',
    lastName: 'Ivanov',
  },
  {
    src: 'https://musicart.xboxlive.com/7/4d4d6500-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
    name: 'John',
    lastName: 'Smith',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnfLlolQL3jtEMdyxRsdVxmTffJVhoxaKMswAZpi3XFA&s',
    name: 'Bob',
    lastName: 'Harvy',
  },
];

function App() {
  return (
    <div className="page_wrapper">
      {users.map((user, i) => {
        return (
          <ProfileCard
            key={i}
            src={user.src}
            name={user.name}
            lastName={user.lastName}
          />
        );
      })}
    </div>
  );
}

export default App;
