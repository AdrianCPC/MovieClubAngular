import {Router} from 'express';
import {deleteMovie, getMovies, getMovie, updateMovie, saveMovie} from '../controllers';

const router = Router();

router.get('/movies', getMovies);

router.get('/movies/:id', getMovie);

router.post('/movies', saveMovie);

router.put('/movies/:id', updateMovie);

router.delete('/movies/:id', deleteMovie);




export default router;