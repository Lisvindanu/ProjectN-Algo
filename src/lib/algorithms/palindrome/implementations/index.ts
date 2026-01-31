import pythonImplementation from './python';
import javascriptImplementation from './javascript';
import javaImplementation from './java';
import cppImplementation from './cpp';
import { AlgorithmImplementation } from '@/lib/types';

export const palindromeImplementations: AlgorithmImplementation[] = [
  {
    language: 'Python',
    code: pythonImplementation,
  },
  {
    language: 'JavaScript',
    code: javascriptImplementation,
  },
  {
    language: 'Java',
    code: javaImplementation,
  },
  {
    language: 'C++',
    code: cppImplementation,
  },
];

export default palindromeImplementations;
