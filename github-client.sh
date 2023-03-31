#echo $GH_PORTFOLIO
# curl -H "Authorization: Bearer "$GH_PORTFOLIO https://api.github.com/milldrew/repos
#curl -H  https://api.github.com/users/milldrew/repos

curl --request GET \
--url "https://api.github.com/users/milldrew/repos" \
--header "Authorization: Bearer "$GH_PORTFOLIO  > payload.ts
