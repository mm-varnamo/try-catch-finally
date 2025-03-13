import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as BlogApi from '@/network/api/blog';
import FormInputField from '@/components/FormInputField';

interface CreatePostFormData {
	slug: string;
	title: string;
	summary: string;
	body: string;
}

const CreateBlogPostPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreatePostFormData>();

	const onSubmitHandler = async (input: CreatePostFormData) => {
		try {
			await BlogApi.createBlogPost(input);
			alert('Post created successfully');
		} catch (error) {
			console.error(error);
			alert(error);
		}
	};

	return (
		<div>
			<h1>Create a post</h1>

			<Form onSubmit={handleSubmit(onSubmitHandler)}>
				<FormInputField
					label='Post title'
					register={register('title', { required: 'Required' })}
					placeholder='Post title'
					maxLength={100}
					error={errors.title}
				/>
				<FormInputField
					label='Post slug'
					register={register('slug', { required: 'Required' })}
					placeholder='Post slug'
					maxLength={100}
					error={errors.slug}
				/>
				<FormInputField
					label='Post summary'
					register={register('summary', { required: 'Required' })}
					placeholder='Post summary'
					maxLength={300}
					as='textarea'
					error={errors.summary}
				/>

				<Form.Group className='mb-3' controlId='body-input'>
					<Form.Label>Post body</Form.Label>
					<Form.Control
						{...register('body')}
						placeholder='Post body'
						as='textarea'
						// error={errors.body}
					/>
				</Form.Group>
				<Button type='submit'>Create post</Button>
			</Form>
		</div>
	);
};

export default CreateBlogPostPage;
