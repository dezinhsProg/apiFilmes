import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

import styled from './styled';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/popular?api_key=8a24a972bb1b95dd2de412749d6bf55c',
      );
      setMovies(response.data.results);
    }
    fetchMovies();
  }, []);

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favorite => favorite !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter(favorite => favorite !== id));
  };

  const handleSearch = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=8a24a972bb1b95dd2de412749d6bf55c&query=${searchQuery}`,
    );
    setMovies(response.data.results);
  };

  const renderItem = ({ item }: { item: Movie }) => (
    <View style={styled.movieContainer}>
      <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
        <Ionicons
          name={favorites.includes(item.id) ? 'heart' : 'heart-outline'}
          size={24}
          color={favorites.includes(item.id) ? 'red' : 'black'}
        />
      </TouchableOpacity>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styled.moviePoster}
      />
      <Text style={styled.movieTitle}>{item.title}</Text>
    </View>
  );

  const renderFavoriteItem = ({ item }: { item: Movie }) => (
    <View style={styled.favoriteItemContainer}>
      <TouchableOpacity onPress={() => removeFavorite(item.id)}>
        <Text style={styled.removeButtonText}>Remover</Text>
      </TouchableOpacity>
      <Text style={styled.favoriteText}>{item.title}</Text>
    </View>
  );

  const renderContent = () => {
    if (showFavorites) {
      const favoriteMovies = movies.filter(movie => favorites.includes(movie.id));
      return (
        <View style={styled.favoritesContainer}>
          <Text style={styled.favoritesTitle}>Filmes Favoritos</Text>
          {favoriteMovies.length > 0 ? (
            <FlatList
              data={favoriteMovies}
              renderItem={renderFavoriteItem}
              keyExtractor={item => item.id.toString()}
            />
          ) : (
            <Text>Nenhum filme marcado como favorito.</Text>
          )}
          <TouchableOpacity onPress={() => setShowFavorites(false)}>
            <Text>Voltar para a lista de filmes</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <>
          <TextInput
            style={styled.searchInput}
            placeholder="Pesquisar filmes..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
          />
          <FlatList
            data={movies}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
          <TouchableOpacity onPress={() => setShowFavorites(true)} style={styled.favoritesButton}>
            <Text style={styled.favoritesButtonText}>Ver Filmes Favoritos</Text>
          </TouchableOpacity>
        </>
        );
      }
    };

    return <View style={styled.container}>{renderContent()}</View>;
    }