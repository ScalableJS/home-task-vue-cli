import MovieCard from '../components/MovieCard.vue';

export default {
  title: 'Example/MovieCard',
  component: MovieCard,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    releaseDate: {
      control: { type: 'text' },
    },
    posterPath: {
      control: { type: 'text' },
    },
    genres: {
      control: { type: 'array' },
    },
  },
};

const movie = {
  title: 'Jurassic World: Fallen Kingdom',
  releaseDate: '2018-06-01',
  posterPath: 'https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg',
  genres: ['Action', 'Adventure', 'Drama', 'Science Fiction', 'Thriller'],
};

const Template = (args) => ({
  components: { MovieCard },
  setup() {
    return { args };
  },

  template: '<MovieCard v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  ...movie,
};
