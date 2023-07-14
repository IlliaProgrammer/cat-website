import { useForm, Controller } from "react-hook-form";
import { IPost } from "../../models/models";
import { postsApi } from "../../services/PostService/PostsService";
import styles from "./CreatePage.module.css"

export default function QuarriesPage() {
  const { register, handleSubmit, formState: { errors }, control} = useForm<IPost>();
  const [createPost, {}] = postsApi.useCreatePostMutation();
  
  
  
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0
  const year = today.getFullYear();
  const formattedDate = `${day}.${month}.${year}`;

  const handleCreate = async (data: IPost) => {
    alert("u added it")
    await createPost({ ...data, date: formattedDate.toString() });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleCreate)}>
    <input className={styles.input} {...register("title", { required: true, maxLength: 20 })} placeholder="Title" autoComplete="off"/>
    {errors.title && <span className={styles.error}>Title is required (max 20 characters)</span>}
    
    <input
        className={styles.input}
        {...register("imgUrl", {
          required: true,
          pattern: /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
        })}
        placeholder="imgUrl"
      />
    {errors.imgUrl && <span className={styles.error}>Image URL is required</span>}
    <Controller
        control={control}
        name="category"
        defaultValue=""
        render={({ field }) => (
          <select {...field} className={styles.input}>
            <option value="" disabled>Select category</option>
            <option value="Behaviour">Behaviour</option>
            <option value="Breeds">Breeds</option>
            <option value="Nutrition">Nutrition</option>
            <option value="Health">Health</option>
          </select>
        )}
      />
    <textarea className={styles.input} {...register("content", { required: true, maxLength: 300, minLength: 100 })} placeholder="Content" autoComplete="off"/>
    {errors.content && <span className={styles.error}>Required 100-300 characters</span>}
    
    <input className={styles.submitButton} type="submit" />
  </form>
  );
}