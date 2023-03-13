import { StyleSheet } from 'react-native';

const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  movieContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
  },
  moviePoster: {
    width: 80,
    height: 120,
    marginRight: 16,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  searchInput: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    marginTop: 20, // Adicionando uma margem superior de 20 pixels
  },
  favoritesButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#f00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    position: 'absolute',
    bottom: 0,
  },
  favoritesButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  favoritesContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 32,
    backgroundColor: '#f5f5f5',
  },
  favoritesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#f00',
  },
  favoriteItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  removeButtonText: {
    color: '#f00',
    marginRight: 8,
    fontWeight: 'bold',
  },
  favoriteText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default styled;
