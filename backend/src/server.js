import app from './app';

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`App running on port ${3333}`);
});
