import produce from 'immer';
import pt from 'date-fns/locale/pt';
import { format } from 'date-fns-tz';

const INITIAL_STATE = {
  categories: [],
};

export default function category(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@category/CATEGORY_SUCCESS': {
        draft.categories = action.payload.categories.map((cat) => ({
          ...cat,
          dateFormatted: format(
            new Date(cat.createdAt),
            "dd 'de' MMMM 'de' yyyy",
            { locale: pt }
          ),
        }));
        break;
      }
      case '@category/CATEGORY_NEW_SUCCESS': {
        const category = {
          id: action.payload.category.id,
          title: action.payload.category.title,
          createdAt: action.payload.category.createdAt,
          dateFormatted: format(
            new Date(action.payload.category.createdAt),
            "dd 'de' MMMM 'de' yyyy",
            { locale: pt }
          ),
        };
        draft.categories = [...draft.categories, category];
        break;
      }
      default:
    }
  });
}
