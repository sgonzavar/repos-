import { View, StyleSheet, Image } from "react-native"
import StyledText from "./StyledText"
import RepositoryStatus from "./RepositoryStatus"
import theme from "../theme"

const RepositoryItem = (props) => {
  return (
    <View
      key={props.id} style={styles.container}>
      <Image style={styles.image} source={{ uri: props.ownerAvatarUrl}} />
      <StyledText 
        fontWeight='bold' 
        fontSize='subheading'
      >
        {props.id}
      </StyledText>
      <StyledText >name: {props.fullName}</StyledText>
      <StyledText >description: {props.description}</StyledText>
      <StyledText style={styles.language} >{props.language}</StyledText>
      <RepositoryStatus {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 6,
    overflow: 'hidden',
  },
  image: {
    borderRadius: 8,
    height: 48,
    width: 48,
  } 
})

export default RepositoryItem