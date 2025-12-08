import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TodoItem = ({ todo, onSave }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleEdit = () => setEditing(true);
  const handleCancel = () => {
    setText(todo.text);
    setEditing(false);
  };
  const handleSave = () => {
    onSave(todo.id, text);
    setEditing(false);
  };

  return (
    <Box display="flex" alignItems="center" sx={{ bgcolor: editing ? 'primary.light' : 'background.paper', p: 2, borderRadius: 2 }}>
      {editing ? (
        <TextField
          value={text}
          onChange={e => setText(e.target.value)}
          variant="outlined"
          size="small"
          inputProps={{ 'aria-label': 'Edit todo text' }}
          sx={{ flex: 1, mr: 2 }}
        />
      ) : (
        <Typography sx={{ flex: 1 }} aria-label="Todo text">{todo.text}</Typography>
      )}
      {editing ? (
        <>
          <IconButton aria-label="Save" color="primary" onClick={handleSave}><SaveIcon /></IconButton>
          <IconButton aria-label="Cancel" color="error" onClick={handleCancel}><CancelIcon /></IconButton>
        </>
      ) : (
        <IconButton aria-label="Edit" color="primary" onClick={handleEdit}><EditIcon /></IconButton>
      )}
    </Box>
  );
};

export default TodoItem;
