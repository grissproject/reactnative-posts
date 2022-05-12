import colors from '../theme/colors';
import images from '../theme/images';
import sizes from '../theme/sizes';

// This isn't really a hook, we could just import these theme files from the components,
// but this 'hook' allow us to implement real theme-support in the future without changing every file
const useTheme = () => ({
  colors,
  images,
  sizes,
});

export default useTheme;
