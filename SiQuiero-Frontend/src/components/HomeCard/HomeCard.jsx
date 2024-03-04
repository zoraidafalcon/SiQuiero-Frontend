import React, {useState} from 'react'
import { gift } from '../../services/gift'
import { Button, Card, CardActions, CardContent, CardHeader, Divider, TextField } from '@mui/material'
// import { useNavigate} from 'react-router-dom'

function HomeCard() {
    // const navigate = useNavigate()
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
  
    const onGift = async () => {
    const result = await gift({ name, category, price, image})
    
    // navigate('/invitacion')
    }
  return (
    <Card sx={{ maxWidth: '500px' }}>
      <CardHeader title="Mi boda" />
      <CardContent>
        <TextField
          onChange={(e) => setName(e.target.value)}
          label="Nombre del regalo"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setCategory(e.target.value)}
          label="Categoría"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setPrice(e.target.value)}
          label="Precio"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setImage(e.target.value)}
          label="Imagen"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
      </CardContent>
      <Divider />
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={onGift} color="success">
            Crear Regalo
          </Button>
      </CardActions>
    </Card>
    )
}

export default HomeCard